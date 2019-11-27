'use strict'

const Model = use('Model')

class Score extends Model {
  user () {
    return this.belongsTo('app/Models/User')
  }
}

module.exports = Score
