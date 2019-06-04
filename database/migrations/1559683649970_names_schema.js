'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NamesSchema extends Schema {
  up () {
    this.create('names', (table) => {
      table.increments()
      table.string('name').unique()
    })
  }

  down () {
    this.drop('names')
  }
}

module.exports = NamesSchema
