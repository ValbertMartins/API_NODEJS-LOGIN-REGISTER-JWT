const User = require('../models/User')



const logoutController = async (req,res) => {
    const { refreshToken } = req.body 


    if(!refreshToken){
        return res.status({"msg": "logout error"})
    }

    try {

        await User.deleteOne({refresh_token: refreshToken})
        res.status(201).json({"msg": "logout successful"})


    }catch(error){
        res.status(401).json({})
    }
}

module.exports = logoutController