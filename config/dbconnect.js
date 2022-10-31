const mongoose = require('mongoose');
require('dotenv').config()
const dbConnect = async () => {
    try { 
        await mongoose.connect(`mongodb://${process.env.DB_SERVER}`)
        console.log('connected mongoDB')
    

    } catch(err){
        console.log(err)
    }
}


module.exports = dbConnect