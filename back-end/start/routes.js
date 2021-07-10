'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.post('/getSlots', 'DayController.getSlots').middleware('auth')
Route.post('/setSlot', 'DayController.setSlot').middleware('auth')
