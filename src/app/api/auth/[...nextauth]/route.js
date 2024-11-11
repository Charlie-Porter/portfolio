
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // Other NextAuth options
};

const handler = NextAuth(authOptions);

export async function GET(request) {
  return handler(request);
}

export async function POST(request) {
  return handler(request);
}

