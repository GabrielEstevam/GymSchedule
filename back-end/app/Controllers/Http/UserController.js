'use strict'

const User = use("App/Models/User")
const Database = use('Database')

class UserController {
  async registerUser ({ request }) {
    const data = request.only(["username", "email", "password", "apartment"])
    const user = await User.create({'username': data.username, 'email': data.email, 'password': data.password, 'apartment': data.apartment})
    return "0"
  }

  // test
  async getUser ({ request }) {
    const {username} = request.all()
    const queryByUsername = await User.findByOrFail('username', username)
    return queryByUsername
  }
}

module.exports = UserController
