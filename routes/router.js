const login = require('../user/login');
const signup = require('../user/register');
const updater = require('../user/update');
const basicAuth = require('../service/authControler');
const { Router } = require('express');
const router = Router();
const validator = require('../utils/uservalidation/validation');
const paginatedResults = require('../user/pagination');
const userdelete = require('../user/userdelete');
const adminvalidation = require('../service/verifyToken');
const ifUnmodifiedSince = require('../service/ifUnmodifiedSince');

router.post('/signup', validator, signup);

router.post('/login', login);

router.put('/update', adminvalidation, ifUnmodifiedSince, updater);

router.get('/list', paginatedResults);

router.delete('/delete', basicAuth, userdelete);

module.exports = router;
