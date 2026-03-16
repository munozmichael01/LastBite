import { auth } from "@/auth"
import { NextResponse } from "next/server"

const RESTAURANTE_ROUTES = ["/manager", "/cocina"]
const AUTH_ROUTES = ["/mis-bolsas", "/mis-reservas", "/perfil", "/reservar"]

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const role = req.auth?.user?.role

  const isRestauranteRoute = RESTAURANTE_ROUTES.some((r) => nextUrl.pathname.startsWith(r))
  const isAuthRoute = AUTH_ROUTES.some((r) => nextUrl.pathname.startsWith(r))

  if (isRestauranteRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${nextUrl.pathname}`, nextUrl))
    }
    if (role !== "RESTAURANTE") {
      return NextResponse.redirect(new URL("/", nextUrl))
    }
  }

  if (isAuthRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${nextUrl.pathname}`, nextUrl))
  }
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon\\.ico).*)"],
}
