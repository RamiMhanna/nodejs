const http = require('http')
const port = 3500

http.createServer((req,res)=>{
    console.log(req.headers)
    console.log(req.method)
    console.log(req.statusCode)
    console.log(req.url)
    if(req.method == 'POST'){
        let buff = ''
        req.on('data', function(chunck){
            buff += chunck
        })
        req.on('end', function (){
            console.log(`body:  ${buff}`)
            res.end('\nAccepted body\n')    
        })
    } else {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Hello Rami !!!\n')
    }
}).listen(port)