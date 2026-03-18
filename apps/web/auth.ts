import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("[auth] authorize: missing credentials")
          return null
        }

        try {
          const usuario = await prisma.usuario.findUnique({
            where: { email: credentials.email as string },
          })

          if (!usuario || !usuario.passwordHash) {
            console.log("[auth] authorize: user not found →", credentials.email)
            return null
          }

          const valid = await compare(credentials.password as string, usuario.passwordHash)
          if (!valid) {
            console.log("[auth] authorize: wrong password for", credentials.email)
            return null
          }

          console.log("[auth] authorize: success →", credentials.email, "role:", usuario.rol)
          return {
            id: usuario.id,
            email: usuario.email,
            name: usuario.nombre,
            role: usuario.rol,
          }
        } catch (err) {
          // Log DB error so it appears in Vercel Function logs
          console.error("[auth] authorize: DB error →", err)
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  session: { strategy: "jwt" },
})
