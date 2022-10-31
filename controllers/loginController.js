const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const loginController = async (req,res) => {

    const { name , password } = req.body
     
    try {
        const correctUser = await User.findOne({name})
        
        if(!correctUser){
            return res.status(401).json({"msg": "user or password doesn't exists"})
        }
        const checkPassword = await bcrypt.compare(password, correctUser.password)
        if(!checkPassword){
            return res.status(401).json({msg: "invalid password or user"})
        }

        const accessToken = jwt.sign(
            {
                id: correctUser._id
            },
            process.env.SECRET,
            {
                expiresIn: '1d'
            }
        )
        const refreshToken = jwt.sign(
            {
                id: correctUser._id
            },
            process.env.SECRET,
            {
                expiresIn: '1d'
            }
        
        )
        
        correctUser.refresh_token = refreshToken
        await correctUser.save()
        res.status(200).json({msg: "logged", accessToken, refreshToken}) 
    } catch(error){
        console.log(error)
        res.status(400).json({ msg : "bad request"})
    }


}


module.exports = loginController