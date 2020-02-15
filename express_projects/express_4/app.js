const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.get('/api/costumers', (req, res) => {
    res.status(200).send([1, 2, 3])
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})