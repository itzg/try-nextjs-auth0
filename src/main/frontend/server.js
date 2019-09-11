const express = require('express');
const next = require('next');
const session = require('express-session');
const authSetup = require('./auth-setup');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const sessionSecret = process.env.SESSION_SECRET;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const sessionConfig = {
    secret: sessionSecret,
    cookie: {
      secure: !dev
    },
    resave: false,
    saveUninitialized: true,
  };

  server.use(session(sessionConfig));

  authSetup(server);

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  })
});
