const http = require('http');
const route = require('./route');

const server = http.createServer(route);
server.listen(5050, () => console.log('Start server on port 5050...'))