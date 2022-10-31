const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

const refreshTokenController = async (req,res) => {
    const { refreshToken } = req.body

    if(!refreshToken){
        return res.status(401).json({})
    }

    console.log('chegou aqui')
    try {
        const foundUser = await User.findOne({ refresh_token: refreshToken })
        if(!foundUser){
            return res.status(401).json({"message": "invalid token"})
        }
        
        const accessToken = jwt.sign(
            { 
                id:foundUser._id 
            }, 
            process.env.SECRET, 
            {
                expiresIn: '30s'
            }
        )
        res.status(201).json({"msg": "new access Token generated", accessToken})
        

    } catch(error){
        res.status(401).json({"msg": "invalid token"})
    }
}

module.exports = refreshTokenController