const express = require('express')
const customersRoute = require('./routes/customers.route')

const app = express()

app.get('/', (req, res) => {
    res.send('Funciona?')
})

app.use(express.json())
app.use('/customers', customersRoute)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Iniciei na porta ${port}`)
})