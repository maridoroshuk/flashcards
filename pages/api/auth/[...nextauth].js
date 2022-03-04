import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: "",
      clientSecret: "",
    }),
    Providers.Twitter({
      clientId: "",
      clientSecret: "",
    }),
    Providers.Email({
     server: {
       host: '',
       port: '',
       auth: {
         user: '',
         pass: ''
       }
     },
     from: ''
    }),
  ],
});
