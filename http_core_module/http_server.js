const http = require('http')
const port = 3500
http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello Rami\n')
}).listen(port)

console.log(`server running at http://localhost:${port}/`)