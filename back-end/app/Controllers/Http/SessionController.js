'use strict'

const User = use('App/Models/User')

class SessionController {
  async login ({request, auth}) {
    const {username, password} = request.all()
    const queryByUsername = await User.findByOrFail('username', username)
    const email = queryByUsername.email
    const token = await auth.attempt(email, password)
    return token
  }
}

module.exports = SessionController
