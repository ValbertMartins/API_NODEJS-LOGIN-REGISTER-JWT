const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const verifyJWT = async (req,res,next) => {
    
    try {
        const token = req.headers.authorization.split(" ")[1]
    
        
        const verifiedJWT = jwt.verify(token, process.env.SECRET)
        
        req.userId = verifiedJWT.id
        next()
        
    } catch(error){
        console.log(error)
        res.status(401).json({msg: "inauthorized"})
    }

}

module.exports = verifyJWT 