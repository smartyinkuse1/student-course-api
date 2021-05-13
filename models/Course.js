const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, "Please add a courseName"]
    },
    courseCode: {
        type: String,
        required: [true, "Please add a courseCode"]
    },
    courseUnit: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    deletedAt : {
        type: Date,
        default: null
    }

},
{
  timestamps: true,
});


module.exports = mongoose.model('Course', CourseSchema)