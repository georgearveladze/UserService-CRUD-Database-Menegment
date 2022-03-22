const login = require('../user/login')
const signup = require('../user/register')
const updater = require('../user/update')
const { Router } = require('express')
const router = Router()
const validator = require('../service/validation')
const paginatedResults = require('../user/pagination')
const userdelete = require('../user/userdelete')
const adminvalidation = require('../middleware/verifyToken')
const ifUnmodifiedSince = require('../middleware/ifUnmodifiedSince')
const verifyToken = require('../middleware/verifyToken')
const loginValidation = require('../middleware/loginValidation')
const deleteValidations = require('../middleware/registerValidation')

router.post('/signup', deleteValidations, validator, signup)

router.post('/login', loginValidation, login)

router.put('/update', verifyToken, adminvalidation, ifUnmodifiedSince, updater)

router.delete('/delete', verifyToken, userdelete)

router.get('/list', paginatedResults)

module.exports = router
