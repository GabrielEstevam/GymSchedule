'use strict'

const Model = use('Model')

class Transaction extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Transaction
