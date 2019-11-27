'use strict'

const Model = use('Model')

class Course extends Model {
  users () {
    return this.belongsToMany('App/Models/User')
      .pivotTable('users')
  }

  modules () {
    return this.hasMany('App/Models/Module')
  }
}

module.exports = Course
