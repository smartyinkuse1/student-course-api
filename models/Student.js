const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add a firstName"]
    },
    lastName: {
        type: String,
        required: [true, "Please add a lastName"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,   
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid email"
        ]
    },
    matricNo: {
        type: Number,
        required: true,
        unique: true
    },
    phone: {
        type: String,
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


module.exports = mongoose.model('Student', StudentSchema)