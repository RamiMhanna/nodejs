const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url, (res)=>{
    let c = 0
    res.on('data', (chunck)=>{
        c++
        console.log(chunck.toString('utf8'))
    })
    res.on('end', ()=>{
        console.log(`response has ended with ${c} chunck(s)`)
    })
}).on('error', (error)=>{
    console.error(`Got error: ${error.message}`)
})