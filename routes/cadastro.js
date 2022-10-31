const express = require('express')
const router = express.Router()
const registerController = require('../controllers/cadastroController')




router.post('/', registerController )

// router.get('/', (req,res) => {
//     res.status(200).json({"msg": "hi"})
// })

module.exports = router