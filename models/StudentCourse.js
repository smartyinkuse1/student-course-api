const mongoose = require("mongoose");
const StudentCourseSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    courseDetails: [
      {
        course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        score: Number,
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentCourse", StudentCourseSchema);
