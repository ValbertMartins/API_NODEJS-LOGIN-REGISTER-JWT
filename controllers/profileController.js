const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const profileController = async (req,res) => {
    try {
        const user = await User.findById(req.userId)

        res.status(200).json({message: `${user.name}`})
    } catch(error){
        res.status(404).json({})
    }
}


module.exports = profileController

