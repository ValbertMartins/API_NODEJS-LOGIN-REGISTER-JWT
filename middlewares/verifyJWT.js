const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const verifyJWT = async (req,res,next) => {
    console.log('cheguei aqui')
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        
        const verifiedJWT = jwt.verify(token, process.env.SECRET)
        
        req.userId = verifiedJWT.id
        next()
        
    } catch(error){
        console.log(error)
        res.status(401).json({msg: "inauthorized"})
    }

}

module.exports = verifyJWT 