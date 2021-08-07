'use strict'

const Route = use('Route')

Route.post('/register', 'UserController.registerUser')
Route.post('/login', 'SessionController.login')
Route.post('/registerDate', 'DateController.registerDate').middleware('auth')
Route.post('/getDay', 'DateController.getDay')
Route.post('/getUserReserves', 'DateController.getUserReserves').middleware('auth')
Route.post('/cancelReserve', 'DateController.cancelReserve').middleware('auth')

