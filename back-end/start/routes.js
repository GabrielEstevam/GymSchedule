'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.registerUser')
Route.post('/login', 'SessionController.login')
Route.post('/registerDate', 'DateController.registerDate').middleware('auth')
Route.post('/getDay', 'DateController.getDay')
//Route.post('/getDate', 'DateController.getSlots').middleware('auth')

// test
Route.post('/getUser', 'UserController.getUser')

