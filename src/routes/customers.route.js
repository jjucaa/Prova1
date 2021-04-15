const express = require('express')
const controller = require('../controller/customer.controller')

const route = express.Router()

route.get('/', controller.listAll)
route.get('/:cpf', controller.listOne)
route.get('/:cpf/dependents', controller.listDep)
route.post('/', controller.create)
route.put('/:cpf', controller.update)
route.delete('/:cpf', controller.remove)

module.exports = route