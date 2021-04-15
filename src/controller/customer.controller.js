const my_db = new Map()

const listAll = (req, res) => {
    const values = Array.from(my_db.values())
    res.status(200).send(values)
}

const create = (req, res) => {
    const customer = req.body
    my_db.set(customer.cpf, customer)
    res.status(201).send(customer)
}

const update = (req, res) => {
    const cpf = parseInt(req.params.cpf, 10)

    if (my_db.has(cpf)) {
        const customer = req.body
        customer.cpf = cpf
        my_db.set(cpf, customer)
        res.status(200).send(customer)
    } else {
        res.status(404).send({
            message: `Customer with CPF (${cpf}) not found`
        })
    }
}

const remove = (req, res) => {
    const cpf = parseInt(req.params.cpf, 10)

    if (my_db.has(cpf)) {
        const customer = my_db.get(cpf)
        my_db.delete(customer.cpf)
        res.status(200).send(customer)
    } else {
        res.status(404).send({
           message: `Customer with CPF (${cpf}) not found`
        })
    }
}

const listOne = (req, res) => {
    const cpf = parseInt(req.params.cpf, 10)

    if (my_db.has(cpf)) {
        const customer = req.body
        my_db.set(cpf, customer)
        res.status(200).send(customer)
    } else {
        res.status(404).send({
            message: `Customer with CPF (${cpf}) not found`
        })
    }
}

const listDep = (req, res) => {
    const cpf = parseInt(req.params.cpf, 10)

    if (my_db.has(cpf)) {
        const values = Array.from(my_db.values())
        res.status(200).send(values)
    } else {
        res.status(404).send({
            message: `Customer with CPF (${cpf}) not found`
        })
    }
}

module.exports = {
    listAll,
    listOne,
    listDep,
    create,
    update,
    remove
}