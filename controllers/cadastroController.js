const User = require('../models/User')
const bcrypt = require('bcrypt')



const registerController = async (req,res) => {

    const { name , password } = req.body

    try {
        const existsUser = await User.findOne({name})
        if(existsUser){
            return res.status(200).json({"msg": "user already exists"}) 
        }
        const passwordHash = await bcrypt.hash(password, 10)
        await User.create({name , password: passwordHash })
        res.status(201).json({ msg : "created user"})

    } catch(error){
        console.log(error)
        res.status(400).json({})
    }
}


module.exports = registerController