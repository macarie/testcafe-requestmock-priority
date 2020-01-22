const { join } = require('path')

const connect = require('connect');
const serveStatic = require('serve-static');

connect()
  .use(serveStatic(join(__dirname, 'static')))
  .listen(8080, () => {
    console.log('Server running on 8080...');
  });
