const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    number: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },

    city: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    state: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    pincode: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 6
    },
    dob:{
        type: Date,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
});

// const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminSchema;