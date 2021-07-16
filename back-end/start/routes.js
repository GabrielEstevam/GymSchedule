'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.registerUser')
Route.post('/login', 'SessionController.login')
Route.post('/getSlots', 'DayController.getSlots').middleware('auth')
Route.post('/setSlot', 'DayController.setSlot').middleware('auth')

// test
Route.post('/getUser', 'UserController.getUser')
