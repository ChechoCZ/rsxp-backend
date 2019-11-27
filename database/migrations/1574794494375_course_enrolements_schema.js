'use strict'

const Schema = use('Schema')

class CourseEnrolementsSchema extends Schema {
  up () {
    this.create('course_enrolements', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('course_id').unsigned().references('id').inTable('courses')
      table.timestamps()
    })
  }

  down () {
    this.drop('course_enrolements')
  }
}

module.exports = CourseEnrolementsSchema
