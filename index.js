import express from 'express'

const app = express()
const PORT = process.env.PORT || 3500

const mockUsers = [
    { id: 1, username: 'anson', displayName: 'Anson' },
    { id: 2, username: 'jack', displayName: 'Jack' },
    { id: 3, username: 'adam', displayName: 'Adam' },
    { id: 4, username: 'tina', displayName: 'Tina' },
    { id: 5, username: 'jason', displayName: 'Jason' },
    { id: 6, username: 'henry', displayName: 'Henry' },
    { id: 7, username: 'marilyn', displayName: 'Marilyn' },
    { id: 8, username: 'aby', displayName: 'Aby' },
    { id: 9, username: 'ken', displayName: 'Ken' },
    { id: 10, username: 'bill', displayName: 'Bill' },
]

// GET requests
app.get('/', (request, response) => {
    response.status(201).send({ msg: 'Hello' })
});

// Query Parameters in GET requests
// link - http://localhost:3500/api/users?filter=username&value=on
app.get('/api/users', (request, response) => {
    console.log('request.query : ', request.query);
    const {
        query: { filter, value },
    } = request

    if (filter && value) {
        return response.send(
            mockUsers.filter((user) => user[filter].includes(value))
        );
    }

    response.send(mockUsers);
});

// Route Parameters in GET requests
// link - http://localhost:3500/api/users/123
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
});

// GET requests
app.get('/api/products', (request, response) => {
    response.send({ id: 123, name: 'Chicken', price: 12.99 })
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
});

// http://localhost:3500/
// http://localhost:3500/users
// http://localhost:3500/products?key=value&key2=value2
