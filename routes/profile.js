const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profileController')
const verifyJWT = require('../middlewares/verifyJWT')
const User = require('../models/User')


router.route('/')
    .get(verifyJWT, profileController)


module.exports = router