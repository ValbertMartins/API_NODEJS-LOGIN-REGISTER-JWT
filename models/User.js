const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
            type: String,
            required: true
        },
    password: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        default: '00'
    }
})


const User = mongoose.model('User', UserSchema )






module.exports = User