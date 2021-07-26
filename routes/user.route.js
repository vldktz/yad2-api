'use strict'

const router = require('express').Router();
const {userLogin,userLogout} = require('./../controllers/user.controller')
const {verifyToken} = require('./../middlewares/validation.middleware');

router.post('/login',userLogin);

router.post('/logout',userLogout);

router.put('/:id',verifyToken,updateAdmin);

exports = router;
