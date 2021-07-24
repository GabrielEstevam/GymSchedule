'use strict'

const Model = use('Model')

class Date extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Date
