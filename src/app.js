const app = require('express')()

const bodyParser = require('body-parser')

//app.use(bodyParser.urlencoded({extend: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send()
})

app.get('/users', (req, res) => {
    const users = [
        {name: 'Jhon Doe', mail: 'john@mail.com'}
    ]
    res.status(200).json(users)
})

app.post('/users', (req, res) => {
    res.status(201).json(req.body)
})

module.exports = app 
