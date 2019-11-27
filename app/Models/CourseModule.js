'use strict'

const Model = use('Model')

class CourseModule extends Model {
  course () {
    return this.belongsTo('App/Models/Course')
  }
}

module.exports = CourseModule
