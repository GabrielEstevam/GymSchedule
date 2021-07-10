'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('days', (table) => {
      table.increments()
      table.string('slot1')
      table.string('slot2')
      table.string('slot3')
      table.timestamps() // timestamp interno do adonis
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
