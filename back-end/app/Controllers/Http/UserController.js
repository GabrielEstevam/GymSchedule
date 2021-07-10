'use strict'

const User = use("App/Models/User")
const Database = use('Database')

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])
    const user = await User.create({'username': data.username, 'email': data.email, 'password': data.password, 'balance':10})
    return "0"
  }
}

module.exports = UserController
