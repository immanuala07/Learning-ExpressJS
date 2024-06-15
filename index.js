import express from 'express'

const app = express()
const PORT = process.env.PORT || 3500

const mockUsers = [
    { id: 1, username: 'anson', displayName: 'Anson' },
    { id: 2, username: 'aby', displayName: 'Aby' },
    { id: 3, username: 'ken', displayName: 'Ken' },
    { id: 4, username: 'bill', displayName: 'Bill' },
]

// GET requests
app.get('/', (request, response) => {
    response.status(201).send({ msg: 'Hello' })
})

// GET requests
app.get('/api/users', (request, response) => {
    response.send(mockUsers)
})

// Route Parameters in GET requests
app.get('/api/users/:id', (request, response) => {
    console.log(request.params)

    const parsedId = parseInt(request.params.id)
    console.log(parsedId)

    if (isNaN(parsedId)) {
        return response.status(400).send({ msg: 'Bad Request. Invalid Id.' })
    }

    const findUser = mockUsers.find((user) => user.id === parsedId)
    if (!findUser) {
        return response.sendStatus(404)
    }
    console.log(findUser)
    return response.send(findUser)
})

// GET requests
app.get('/api/products', (request, response) => {
    response.send({ id: 123, name: 'Chicken', price: 12.99 })
})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})

// link - http://localhost:3500/
