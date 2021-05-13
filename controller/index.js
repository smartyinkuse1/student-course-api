const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const StudentCourse = require('../models/StudentCourse');
const Course = require('../models/Course');
const Student = require('../models/Student');



const getStudentCourses = asyncHandler(async(req,res,next)=> {
    let studentCourses = await StudentCourse.find().populate("student").populate({
        path: "courseDetails", // populate blogs
        populate: {
           path: "course" // in blogs, populate comments
        }
     })
    res.status(200).json({
        success: true,
        data:studentCourses
    })
})

//@desc  Get Single StudentCourse
//@route GET /api/v1/StudentCourse/:id
//@access Private/Admin

const getStudentCourse = asyncHandler(async(req,res,next)=> {
    const studentCourse = await StudentCourse.findById(req.params.id)
    if (!studentCourse) {
        return next( new ErrorResponse('StudentCourse not found', 404))
    }
    res.status(200).json({
        success: true,
        data:studentCourse
    })
})

//@desc  Create StudentCourse
//@route POST /api/v1/StudentCourse/
//@access Private/Admin

const createStudentCourse = asyncHandler(async(req,res,next)=> {
    const studentCourse = await StudentCourse.create(req.body)
    res.status(200).json({
        success: true,
        data:studentCourse
    })
})

const createCourse = asyncHandler(async(req,res,next)=> {
    console.log(req.body)
    const course = await Course.create(req.body)
    res.status(200).json({
        success: true,
        data:course
    })
})

const createStudent = asyncHandler(async(req,res,next)=> { 
    const student = await Student.create(req.body)
    res.status(200).json({
        success: true,
        data:student
    })
})

const getStudents = asyncHandler(async(req,res,next)=> {
    let students = await Student.find()
    res.status(200).json({
        success: true,
        data:students
    })
})

const getCourses = asyncHandler(async(req,res,next)=> {
    let courses = await Course.find()
    res.status(200).json({
        success: true,
        data:courses
    })
})
//@desc  Update StudentCourse
//@route GET /api/v1/StudentCourse/:id
//@access Private/Admin

const updateStudentCourse = asyncHandler(async(req,res,next)=> {
    const studentCourse = await StudentCourse.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        data:studentCourse
    })
})

//@desc  Delete StudentCourse
//@route DELETE /api/v1/StudentCourse/:id
//@access Private/Admin

const deleteStudentCourse = asyncHandler(async(req,res,next)=> {
    await StudentCourse.findByIdAndRemove(req.params.id)
    res.status(200).json({
        success: true,
        data: {}
    })
})

module.exports = { 

    getStudentCourses,
    getStudentCourse,
    createCourse,
    createStudent,
    createStudentCourse,
    updateStudentCourse,
    deleteStudentCourse,
    getStudents,
    getCourses
}