# LastBite — Contexto del Proyecto

## Qué es LastBite
App de **reservas de mesa + rescate de comida excedente** (modelo Too Good To Go) para restaurantes en Caracas, Venezuela. Permite a usuarios reservar mesa y comprar bolsas sorpresa con excedentes del servicio a precio reducido. El restaurante gestiona todo desde un panel propio.

**Dominio de producción:** https://last-bite-web.vercel.app
**Repositorio:** https://github.com/munozmichael01/LastBite
**Base de datos:** Supabase PostgreSQL (proyecto: jglyfryxrptwapefnawx, región: eu-west-3)

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Frontend | Next.js 15.5.12 (App Router) |
| Estilos | Tailwind CSS 4 + shadcn/ui |
| Auth | NextAuth v5 (Credentials provider, JWT strategy) |
| ORM | Prisma 5.22.0 |
| DB | Supabase PostgreSQL |
| Deploy | Vercel (Root Directory: `apps/web`) |
| Runtime Mobile (pendiente) | Capacitor (fase 3) |

**Monorepo:** pnpm workspaces + Turborepo
- `apps/web` — Next.js app
- `packages/db` — schema Prisma + scripts de migración

---

## Arquitectura clave

### Prisma client
El cliente Prisma se genera en `apps/web/generated/prisma/` (NO en `packages/db`). Esto es crítico para Vercel: el engine binary `libquery_engine-rhel-openssl-3.0.x.so.node` debe vivir dentro del directorio de Next.js para que sea trackeado en el bundle serverless.

```
packages/db/prisma/schema.prisma
  output = "../../../apps/web/generated/prisma"   ← apunta DENTRO de apps/web
```

Importar Prisma siempre desde:
```ts
import { prisma } from "@/lib/prisma"   // apps/web/lib/prisma.ts
```
**Nunca** desde `@lastbite/db` para queries — ese paquete ya no exporta el cliente.

### Vercel deployment
`apps/web/vercel.json`:
```json
{
  "framework": "nextjs",
  "installCommand": "cd ../.. && pnpm install && pnpm --filter @lastbite/db run build",
  "outputDirectory": ".next"
}
```
- Sin `buildCommand` explícito — Vercel usa el `build` script del package.json
- `framework: "nextjs"` overrides la detección automática de Turbo (que rompía el output dir)
- El `outputDirectory: ".next"` es necesario aunque Next.js lo use por defecto

Root Directory en Vercel (configurado en el dashboard, no en código): `apps/web`

### Auth
- `apps/web/auth.ts` — NextAuth config con Credentials provider
- `apps/web/middleware.ts` — protege rutas `/manager/*`, `/perfil`, `/mis-reservas`, `/mis-bolsas`, `/reservar/*`
- Session contiene: `id`, `email`, `name`, `role`
- `RESTAURANTE` role → acceso a `/manager`

---

## Variables de entorno

### Vercel (producción) — ya configuradas
```
DATABASE_URL       postgresql://...pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL         postgresql://...pooler.supabase.com:5432/postgres
AUTH_SECRET        uo3abpVIZMNOOkr182nSrMo05Egdhm5BrxWRLgp/Q4U=
NEXTAUTH_SECRET    (mismo valor que AUTH_SECRET)
NEXTAUTH_URL       https://last-bite-web.vercel.app
```

### Local (`apps/web/.env.local`) — no commitear
```
DATABASE_URL="postgresql://postgres.jglyfryxrptwapefnawx:LastBite-2026@aws-1-eu-west-3.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.jglyfryxrptwapefnawx:LastBite-2026@aws-1-eu-west-3.pooler.supabase.com:5432/postgres"
NEXTAUTH_URL="http://localhost:3000"
AUTH_SECRET="uo3abpVIZMNOOkr182nSrMo05Egdhm5BrxWRLgp/Q4U="
NEXTAUTH_SECRET="uo3abpVIZMNOOkr182nSrMo05Egdhm5BrxWRLgp/Q4U="
```

---

## Schema de base de datos (resumen)

```
Usuario          → rol: CLIENTE | RESTAURANTE | ADMIN
Restaurante      → 1:1 con Usuario (managerId)
Turno            → horarios/turnos del restaurante
Promocion        → descuentos activos
ReservaMesa      → reserva de mesa (cliente → restaurante)
ResenaMesa       → reseña post-reserva
BolsaSorpresaPlantilla → plantilla de tipo de bolsa
PublicacionBolsa → publicación diaria de bolsas disponibles
ReservaBolsa     → compra de bolsa (cliente → publicación)
ResenaBolsa      → reseña post-bolsa
```

### Usuarios de prueba en Supabase
| Email | Password | Rol | Datos |
|---|---|---|---|
| `carbon@lastbite.app` | `LastBite2026!` | RESTAURANTE | Restaurante Carbón completo: 3 turnos, 2 promos, 6 reservas, 2 plantillas bolsa, 3 publicaciones |
| `test@lastbite.app` | `LastBite2026!` | CLIENTE | Usuario cliente básico |

> ⚠️ **IMPORTANTE:** La contraseña es `LastBite2026!` (NO `password123`). Si el login falla silenciosamente, primero verificar `/api/health` para confirmar conectividad DB.

---

## Estado de páginas (mock vs real)

### ✅ Conectado a DB real
| Página | Notas |
|---|---|
| `/auth/login` | NextAuth credentials |
| `/auth/registro` | POST `/api/registro` → Prisma |
| `/perfil` | Server component + `PerfilClient` |
| `/manager` (dashboard) | KPIs reales, reservas hoy, ventas bolsas |
| `/manager/reservas` | Server fetch + client filters + PATCH estado |
| `/manager/bolsas` | Server fetch + create plantilla + publicar |

### ❌ Pendiente de conectar (usa mock-data)
| Página | Mock source | Prioridad |
|---|---|---|
| `/` (home) | `restaurants`, `surplusBags` | 🔴 Alta |
| `/buscar` | `restaurants` | 🔴 Alta |
| `/restaurante/[id]` | `getRestaurant()` | 🔴 Alta |
| `/reservar/[id]` | `getRestaurant()` — **no persiste** | 🔴 Alta |
| `/mis-reservas` | `currentUser.reservations` | 🔴 Alta |
| `/bolsas` | `surplusBags` | 🟡 Media |
| `/bolsas/[id]` | `surplusBags` — **no persiste** | 🟡 Media |
| `/mis-bolsas` | `currentUser.bagPurchases` | 🟡 Media |
| `/manager/mesas` | hardcoded | 🟢 Baja |
| `/manager/carta` | hardcoded | 🟢 Baja |
| `/manager/promociones` | hardcoded | 🟢 Baja |
| `/manager/estadisticas` | hardcoded | 🟢 Baja |
| `/manager/ajustes` | hardcoded | 🟢 Baja |
| `/cocina` | hardcoded comandas | 🟢 Baja |

---

## Roadmap activo

### Fase 1 — Conectar flujos cliente (EN PROGRESO)
1. [ ] Home + Buscar → query `Restaurante` desde DB
2. [ ] `/restaurante/[id]` → detalle real (turnos, promos, bolsas activas)
3. [ ] `/reservar/[id]` → guardar `ReservaMesa` en DB + redirect con confirmación
4. [ ] `/mis-reservas` → `ReservaMesa` del usuario autenticado
5. [ ] `/bolsas` → `PublicacionBolsa` activas del día
6. [ ] `/bolsas/[id]` → detalle + crear `ReservaBolsa`
7. [ ] `/mis-bolsas` → `ReservaBolsa` del usuario autenticado

### Fase 2 — Datos reales de restaurantes
- [ ] Integrar output de Gemini v2 en `mock-data.ts` (referencia visual) y hacer seed a DB
- [ ] 10-15 restaurantes reales en Supabase
- [ ] Pendiente: recibir archivo de Gemini (carpeta "Antigravity scraping" — actualmente vacía)

### Fase 3 — App mobile con Capacitor
- [ ] Instalar `@capacitor/core`, `@capacitor/cli`, `@capacitor/ios`, `@capacitor/android`
- [ ] Configurar `capacitor.config.ts` apuntando al build de Next.js
- [ ] Ajustar viewport, safe areas, splash screen
- [ ] Build iOS → Xcode → TestFlight
- [ ] Build Android → Android Studio → Play Store internal testing
- [ ] Requiere: Apple Developer Account ($99/año) + Google Play Console ($25 one-time)

### Fase 4 — Pagos (A evaluar)
- Opciones para Venezuela: Zelle, Binance Pay/USDT, PagoMóvil, efectivo en local
- MVP recomendado: "pago en local al recoger" (sin integración técnica)
- Después: evaluar pasarela según feedback de primeros clientes

---

## Comandos útiles

```bash
# Desarrollo local
pnpm dev                                    # desde /apps/web
pnpm --filter @lastbite/db run db:studio   # Prisma Studio

# Regenerar cliente Prisma (necesario tras cambios en schema)
cd packages/db && npx prisma generate

# Migrar base de datos
cd packages/db && npx prisma db push       # push directo (desarrollo)
cd packages/db && npx prisma migrate dev   # migración con historial

# Seed de restaurante demo
node /tmp/seed-restaurant.mjs              # crea carbon@lastbite.app si no existe

# Type check
cd apps/web && npx tsc --noEmit
```

---

## Notas de arquitectura / decisiones tomadas

- **Por qué Capacitor y no React Native:** Reutiliza el 100% del código Next.js existente. Para un MVP orientado a demos con potenciales clientes, la velocidad de desarrollo supera las ventajas de una app 100% nativa. Se puede migrar a React Native después si la tracción lo justifica.
- **Por qué no PWA:** iOS no permite publicar PWAs en App Store. Requiere wrapper nativo.
- **Moneda:** USD (precios en dólares, común en restaurantes premium de Caracas).
- **Categorías de cocina:** Parrilla, Criolla, Mariscos, Japonesa, Italiana, Internacional, Vegetariana, Fusión (ajustadas al mercado caraqueño).
- **`turbo.json` y env vars:** Las variables de entorno NO están en `turbo.json`. Esto genera un warning en el build de Vercel pero NO afecta el runtime — Vercel inyecta las vars directamente en las funciones serverless. El warning es cosmético.
- **`packages/db/index.ts`:** Actualmente es un comentario vacío. No exporta el cliente Prisma. Toda la interacción con DB se hace desde `apps/web/lib/prisma.ts`.
