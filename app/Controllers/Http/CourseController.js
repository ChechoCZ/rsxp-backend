'use strict'

const Course = use('App/Models/Course')

class CourseController {
  
  async index ({ request, response, view }) {
    const courses = Course.all()

    return courses
  }

  async store ({ request, response }) {
    const course = await Course.create(request.body)

    return course
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const course = await Course.find(params.id)

    course.delete()
  }
}

module.exports = CourseController
