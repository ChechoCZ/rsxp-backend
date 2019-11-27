'use strict'

const User = use('App/Models/User')
const Course = use('App/Models/Course')

class UserController {
  
  async index ({ request, response, view }) {
    const user = await User.all()

    return user
  }

  async store ({ request, response }) {
    const user = await User.create(request.body)
    const courses = await Course.all()

    await user.courses().attach(courses.toJSON().map(course => course.id))

    const user_courses = await user.courses().fetch()

    return user_courses
  }

  async show ({ params, request, response, view }) {
    const user = await User.query().where('id', '=', request.body.id).with('courses').fetch()

    return user
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const user = await User.find(params.id)

    user.delete()
  }
}

module.exports = UserController
