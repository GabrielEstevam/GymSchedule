'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DateSchema extends Schema {
  up () {
    this.create('dates', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('day', 20).notNullable()
      table.string('slot', 2)
      table.string('apartment', 10)
      table.timestamps() // timestamp interno do adonis
    })
  }

  down () {
    this.drop('dates')
  }
}

module.exports = DateSchema
