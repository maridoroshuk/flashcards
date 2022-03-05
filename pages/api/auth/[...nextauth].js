import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.DOMAIN
    }),
    // Providers.Email({
    //  server: {
    //    host: '',
    //    port: '',
    //    auth: {
    //      user: '',
    //      pass: ''
    //    }
    //  },
    //  from: ''
    // }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
