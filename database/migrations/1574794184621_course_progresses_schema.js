'use strict'

const Schema = use('Schema')

class CourseProgressesSchema extends Schema {
  up () {
    this.create('course_progresses', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('module_id').unsigned().references('id').inTable('course_modules')
      table.boolean('is_completed').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('course_progresses')
  }
}

module.exports = CourseProgressesSchema
