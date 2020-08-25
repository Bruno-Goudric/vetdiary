const express = require('express')

const UsersController = require('./controllers/User')

const routes = express.Router()

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.post)
routes.put('/users/:id', UsersController.put)
routes.delete('/users/:id', UsersController.delete)

module.exports = routes