'use strict'

const Schema = use('Schema')

class CourseModulesSchema extends Schema {
  up () {
    this.create('course_modules', (table) => {
      table.increments()
      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.string('description').notNullable().unique()
      table.string('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('course_modules')
  }
}

module.exports = CourseModulesSchema
