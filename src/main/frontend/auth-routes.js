const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login',
    passport.authenticate('auth0', {
      scope: 'openid email profile'
    }),
    (req, res) => {
      res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
  req.logout();

  res.clearCookie('token');
  res.redirect('/');
});

router.get('/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/login',
      session: false
    }),
    (req, res) => {
      if (!req.user) {
        throw new Error('user is null');
      }

      res.cookie('token', req.user.jwtToken, {
        maxAge: req.user.expiresIn * 1000
      });
      res.redirect('/');
    }
);

module.exports = router;