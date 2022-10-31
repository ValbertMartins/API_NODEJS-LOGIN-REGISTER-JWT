const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const verifyJWT = require('../middlewares/verifyJWT')

router.get('/', verifyJWT, profileController)


module.exports = router