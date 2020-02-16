const express = require('express')
const Joi = require('joi')

const app = express()

app.use(express.json())

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

app.post('/api/customers', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema)
    console.log(result)
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }
    const customer = {
        id: customers.length + 1,
        name: req.body.name.trim(),
        company: req.body.company.trim(),
        tel: req.body.tel.trim(),
        address: req.body.address.trim()
    }
    customers.push(customer)
    res.send('New Customer was added ... ')
})

app.put('/api/customers/:id', (req, res) => {

    // look up the customer first 
    var customer = customers.find(c => c.id === parseInt(req.params.id))

    //if it is not exsiting return 404
    if (!customer) return res.status(404).send('The customer with the given id is not found')
     

    //validate
    const schema = {
        name: Joi.string().min(3).required(),
        company: Joi.string().min(3).required(),
        tel: Joi.string().min(3).required(),
        address: Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema)

    //if invalid, return 400 - bad request
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
        return
    }

    //Update customer
    customer.name = req.body.name
    customer.company = req.body.company
    customer.tel = req.body.tel
    customer.address = req.body.address

    //return the updated customer
    res.send(customer)

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})