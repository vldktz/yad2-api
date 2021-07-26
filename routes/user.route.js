'use strict'

const router = require('express').Router();
const {userLogin,userLogout,updateUser,createNewUser} = require('./../controllers/user.controller')
const {verifyTokenMiddleware,verifySelfToken} = require('./../middlewares/validation.middleware');

router.post('/',createNewUser);

router.post('/login',userLogin);

router.post('/logout',userLogout);

router.put('/:id',verifyTokenMiddleware,verifySelfToken,updateUser);

exports = router;
