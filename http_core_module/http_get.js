const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url, (res)=>{
    let buff = ''
    res.on('data', (chunck)=>{
        buff += chunck
    })
    res.on('end', ()=>{
        console.log(buff)
    })
    res.on('error', (error)=>{
        console.error(`Second error: ${error}`)
    })
}).on('error', (error)=>{
    console.error(`Got error: ${error.message}`)
})