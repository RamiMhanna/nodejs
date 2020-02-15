const express = require('express')
const app = express()
const port = process.env.PORT || 5000
 let customers = [
     {
         id: 1,
         name: 'Rami Mhanna',
         company: 'Mhanna',
         tel: '0041779110001',
         address: 'würzenbachmatte 33 6006 Luzern'
     },
     {
        id: 2,
        name: 'Rami Mhanna',
        company: 'Mhanna',
        tel: '0041779110002',
        address: 'würzenbachmatte 33 6006 Luzern'
    },
    {
        id: 3,
        name: 'Rami Mhanna',
        company: 'Mhanna',
        tel: '0041779110003',
        address: 'würzenbachmatte 33 6006 Luzern'
    }
 ]
app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.get('/api/customers', (req, res) => {
    res.send(customers)
})

app.get('/api/customers/:id', (req, res) => {
    var customer = customers.find(c => c.id === parseInt(req.params.id))
    if (!customer) return res.status(404).send('The customer with the given id is not found')
    //res.send(customer[req.params.id])
    res.status(200).send(customer)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})