
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  nombre: 'nombre',
  telefono: 'telefono',
  rol: 'rol',
  idioma: 'idioma',
  moneda: 'moneda',
  dietaPreferencia: 'dietaPreferencia',
  puntos: 'puntos',
  noShowCount: 'noShowCount',
  altoRiesgo: 'altoRiesgo',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.RestauranteScalarFieldEnum = {
  id: 'id',
  managerId: 'managerId',
  nombre: 'nombre',
  descripcion: 'descripcion',
  direccion: 'direccion',
  ciudad: 'ciudad',
  barrio: 'barrio',
  lat: 'lat',
  lng: 'lng',
  telefono: 'telefono',
  email: 'email',
  sitioWeb: 'sitioWeb',
  tipoCocina: 'tipoCocina',
  precioMedio: 'precioMedio',
  capacidadTotal: 'capacidadTotal',
  estado: 'estado',
  servicios: 'servicios',
  fotos: 'fotos',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.TurnoScalarFieldEnum = {
  id: 'id',
  restauranteId: 'restauranteId',
  nombre: 'nombre',
  diasSemana: 'diasSemana',
  horaInicio: 'horaInicio',
  horaFin: 'horaFin',
  intervaloMin: 'intervaloMin',
  capacidad: 'capacidad',
  activo: 'activo',
  creadoEn: 'creadoEn'
};

exports.Prisma.PromocionScalarFieldEnum = {
  id: 'id',
  restauranteId: 'restauranteId',
  nombre: 'nombre',
  tipo: 'tipo',
  valor: 'valor',
  condiciones: 'condiciones',
  fechaInicio: 'fechaInicio',
  fechaFin: 'fechaFin',
  diasSemana: 'diasSemana',
  horaInicio: 'horaInicio',
  horaFin: 'horaFin',
  estado: 'estado',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.ReservaMesaScalarFieldEnum = {
  id: 'id',
  clienteId: 'clienteId',
  restauranteId: 'restauranteId',
  promocionId: 'promocionId',
  fecha: 'fecha',
  hora: 'hora',
  comensales: 'comensales',
  estado: 'estado',
  codigo: 'codigo',
  notas: 'notas',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.ResenaMesaScalarFieldEnum = {
  id: 'id',
  reservaId: 'reservaId',
  clienteId: 'clienteId',
  rating: 'rating',
  comentario: 'comentario',
  creadoEn: 'creadoEn'
};

exports.Prisma.BolsaSorpresaPlantillaScalarFieldEnum = {
  id: 'id',
  restauranteId: 'restauranteId',
  nombre: 'nombre',
  descripcion: 'descripcion',
  precio: 'precio',
  valorEstimado: 'valorEstimado',
  etiquetasDieta: 'etiquetasDieta',
  tipComida: 'tipComida',
  condiciones: 'condiciones',
  politicaReembolso: 'politicaReembolso',
  activa: 'activa',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.PublicacionBolsaScalarFieldEnum = {
  id: 'id',
  restauranteId: 'restauranteId',
  plantillaId: 'plantillaId',
  fecha: 'fecha',
  franjaInicio: 'franjaInicio',
  franjaFin: 'franjaFin',
  unidadesTotales: 'unidadesTotales',
  unidadesVendidas: 'unidadesVendidas',
  estado: 'estado',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.ReservaBolsaScalarFieldEnum = {
  id: 'id',
  clienteId: 'clienteId',
  publicacionId: 'publicacionId',
  unidades: 'unidades',
  estado: 'estado',
  codigo: 'codigo',
  metodoPago: 'metodoPago',
  creadoEn: 'creadoEn',
  actualizadoEn: 'actualizadoEn'
};

exports.Prisma.ResenaBolsaScalarFieldEnum = {
  id: 'id',
  reservaId: 'reservaId',
  clienteId: 'clienteId',
  rating: 'rating',
  comentario: 'comentario',
  creadoEn: 'creadoEn'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Rol = exports.$Enums.Rol = {
  CLIENTE: 'CLIENTE',
  RESTAURANTE: 'RESTAURANTE',
  ADMIN: 'ADMIN'
};

exports.EstadoRestaurante = exports.$Enums.EstadoRestaurante = {
  ACTIVO: 'ACTIVO',
  PAUSADO: 'PAUSADO',
  PENDIENTE: 'PENDIENTE'
};

exports.TipoPromo = exports.$Enums.TipoPromo = {
  PORCENTAJE: 'PORCENTAJE',
  IMPORTE_FIJO: 'IMPORTE_FIJO',
  MENU_ESPECIAL: 'MENU_ESPECIAL'
};

exports.EstadoPromo = exports.$Enums.EstadoPromo = {
  ACTIVA: 'ACTIVA',
  PAUSADA: 'PAUSADA',
  EXPIRADA: 'EXPIRADA'
};

exports.EstadoReserva = exports.$Enums.EstadoReserva = {
  CONFIRMADA: 'CONFIRMADA',
  MODIFICADA: 'MODIFICADA',
  CANCELADA: 'CANCELADA',
  COMPLETADA: 'COMPLETADA',
  NO_SHOW: 'NO_SHOW'
};

exports.EstadoPublicacion = exports.$Enums.EstadoPublicacion = {
  ACTIVA: 'ACTIVA',
  FINALIZADA: 'FINALIZADA',
  CANCELADA: 'CANCELADA'
};

exports.EstadoBolsa = exports.$Enums.EstadoBolsa = {
  PENDIENTE: 'PENDIENTE',
  ENTREGADA: 'ENTREGADA',
  NO_RECOGIDA: 'NO_RECOGIDA',
  CANCELADA: 'CANCELADA'
};

exports.MetodoPago = exports.$Enums.MetodoPago = {
  PREPAGO: 'PREPAGO',
  PAGO_EN_LOCAL: 'PAGO_EN_LOCAL'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Restaurante: 'Restaurante',
  Turno: 'Turno',
  Promocion: 'Promocion',
  ReservaMesa: 'ReservaMesa',
  ResenaMesa: 'ResenaMesa',
  BolsaSorpresaPlantilla: 'BolsaSorpresaPlantilla',
  PublicacionBolsa: 'PublicacionBolsa',
  ReservaBolsa: 'ReservaBolsa',
  ResenaBolsa: 'ResenaBolsa'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
