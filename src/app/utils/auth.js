import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, auth } = NextAuth({
  providers: [GitHub],
  debug: false,
  logger: {
    error(code, ...message) {
      console.error(code, ...message)
    },
    warn(code, ...message) {
      console.warn(code, ...message)
    },
    debug(code, ...message) {
      console.debug(code, ...message)
    },
  },
})


