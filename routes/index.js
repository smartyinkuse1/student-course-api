const express = require('express');
const { getStudentCourses, getStudentCourse, createStudentCourse, updateStudentCourse, deleteStudentCourse, createCourse, createStudent, getStudents, getCourses}  = require('../controller/index');
const router = express.Router({mergeParams: true})


router
    .route('/')
    .get(getStudentCourses)
    .post(createStudentCourse)
router.route('/course')
    .post(createCourse)
    .get(getCourses)    
router.route('/student')
    .post(createStudent)
    .get(getStudents)
router
    .route('/:id')
    .get(getStudentCourse)
    .put(updateStudentCourse)
    .delete(deleteStudentCourse)

module.exports = router;