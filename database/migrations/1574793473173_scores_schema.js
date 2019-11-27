'use strict'

const Schema = use('Schema')

class ScoresSchema extends Schema {
  up () {
    this.create('scores', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('points').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('scores')
  }
}

module.exports = ScoresSchema
