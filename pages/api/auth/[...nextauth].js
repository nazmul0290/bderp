import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const [user] = await userData.filter((user) => user.email === email);

        if (!user) {
          throw new Error("Incorrect Username or password");
        }

        const checkPassword = user.password === password;

        if (!checkPassword) {
          throw new Error("Incorrect Password");
        } else {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
});
