const express = require('express')
const router = express.Router()
const registerController = require('../controllers/cadastroController')




router.post('/', registerController )


module.exports = router