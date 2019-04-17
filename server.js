const http = require('http');
const app = require('./app');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, ()=>
{
    console.clear();
    console.log(`The server is live on : ${port}`);
})
