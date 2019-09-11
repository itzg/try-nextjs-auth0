const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const authRoutes = require('./auth-routes');

function authSetup(server) {
  const strategy = new Auth0Strategy(
      {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL:
            process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
      },
      function (accessToken, refreshToken, extraParams, profile, done) {
        return done(null, {
          profile,
          jwtToken: extraParams.id_token,
          expiresIn: extraParams.expires_in
        });
      }
  );

  passport.use(strategy);

  server.use(passport.initialize());
  server.use(passport.session());

  server.use(authRoutes);
}

module.exports = authSetup;