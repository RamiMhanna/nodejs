const http = require('http')
const port = 3500
http.createServer((req, res) => {
  res.writeHead(404, {
    'Content-Length': '5',
    'Content-Type': 'text/plain' })
  res.statusCode = 200
  res.write('Hello')
  res.end(' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)