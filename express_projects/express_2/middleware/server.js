const express = require('express')
const app = express()
app.use((req, res, next )=>{
    console.log(`${req.method}:  ${req.url}`)
    next()
})
app.use((req, res, next)=>{
    if(req.query.api_key){
        next()
    } else {
         res.status(401).send({msg:'Not authorized'})
      }
    })
app.get('/', (req,res) => {
    res.send('Hello Rami !!! ')
})
app.get('/user', (req, res) => {
    res.send({msg :'User List'})
})

app.get('/accounts', (req, res, next) => {
    console.log('accounts inline middleware')
    next()
}, (req, res) => {
    res.send({msg :'Accounts List'})
})

app.get('/transactions', (req, res, next) => {
    console.log('transactions inline middleware')
    next(new Error('oopps'))
},(req, res) => {
    res.send({msg :'Transactions List'})
})
app.use((error, req, res, next) =>{
    res.status(500).send(error)
})
app.listen(3000)