'use strict'

const Module = use('App/Models/CourseModule')

class CourseModuleController {
  
  async index ({ request, response, view }) {
  
  }

  async store ({ request, response }) {
    const course_module = await Module.create(request.body)

    return course_module
  }

  async show ({ params, request, response, view }) {
    const course_modules = await Module
      .query()
      .where('course_id', '=', params.id)
      .fetch()

    return course_modules
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const course_module = await Module.find(params.id)

    course_module.delete()
  }
}

module.exports = CourseModuleController
