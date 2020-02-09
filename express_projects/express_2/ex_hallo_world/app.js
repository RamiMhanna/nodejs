const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', 'templates')
app.set('view engine', 'jade')
app.get('/', (req,res) => {
    res.send('Hello World')
})
app.get('/user', (req, res) => {
    res.send({List :'User List'})
})
app.listen(3000)
