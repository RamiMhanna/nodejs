const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyparser.json())
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

app.post('/accounts', (req, res, next) => {
    console.log(req.body)
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