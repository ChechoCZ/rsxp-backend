'use strict'

const Route = use('Route')

/* Users */
Route.get('/users', 'UserController.index')
Route.post('/users', 'UserController.store')
Route.delete('/users/:id', 'UserController.destroy')

/* Courses */
Route.get('/courses', 'CourseController.index')
Route.post('/courses', 'CourseController.store')
Route.delete('/courses/:id', 'CourseController.destroy')

/* Course Modules */
Route.post('/course_modules', 'CourseModuleController.store')
Route.get('/course_modules/:id', 'CourseModuleController.show') 

/* Course Enrolements */
Route.post('/course_enrolements', 'CourseEnrolementController.show')

/* Teste */
Route.post('/courses_by_user', 'UserController.show')
