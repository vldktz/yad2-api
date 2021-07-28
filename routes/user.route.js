'use strict'

const router = require('express').Router();
const {userLogin,userLogout,updateUser,createNewUser} = require('./../controllers/user.controller')
const {verifyTokenMiddleware,verifySelfToken} = require('./../middlewares/validation.middleware');

/**
 * route for creating a new user
 */
router.post('/',createNewUser);

/**
 * route for user log in
 */
router.post('/login',userLogin);

/**
 * route for user log out
 */
router.post('/logout',userLogout);

/**
 * route for user update
 */
router.put('/:id',verifyTokenMiddleware,verifySelfToken,updateUser);

module.exports = router;
