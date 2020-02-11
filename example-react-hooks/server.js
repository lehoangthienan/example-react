
const express = require('express');
const next = require('next');
const path = require('path');

const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './', dev });
const handler = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();

    server.use('/', express.static(path.join(__dirname, '/static')));

    server.get('/_next/*', (req, res) => handler(req, res));

    server.get('/', (req, res) => app.render(req, res, '/'));

    // custom route
    server.get('/xxx-xxx', (req, res) => {
      app.render(req, res, '/xxx')
    })

    server.get('*', (req, res) => handler(req, res))

    server.listen(PORT, (err) => {
      if (err) throw err && console.log(err);
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error && console.log('error');
  });
