'use strict'

const {responseHandler,errorHandler,returnResponse} = require('./../utils/response');
const {userLoginValidator,userUpdateValidator,userCreateValidator} = require('./../utils/input-validation');
const {ERRORS,TOKEN_TYPES,USER_LOGIN_TOKEN_SETTING} = require('./../utils/consts');
const {login,updateUserByID,createUser} = require('./../services/user.service');
const {createToken} = require('./../utils/jwt');
const appDomain = require('./../utils/config').app.domain;

const createNewUser = async ({body} , res) => {
    const newUser = body;
    const valid = userCreateValidator.validate(newUser);
    if (valid.error)
        return (errorHandler(ERRORS.badInputFormat,res))
    try {
        const user = await createUser(newUser);
        const token = createToken(user,TOKEN_TYPES.userLogin);
        res.cookie('access_token',token,USER_LOGIN_TOKEN_SETTING);
        console.info({UserID : user.id, UserName : user.fullName},'user created and login success');
        return responseHandler(returnResponse(0,user,'create success'),res)
    }
    catch (err)  {
        console.info('failed to create new user', err.message);
        return (errorHandler(err,res))
    }
}

const userLogin = async ({body}, res) => {
    const loginParams = body;
    const valid = userLoginValidator.validate(loginParams);
    if (valid.error)
        return (errorHandler(ERRORS.userEmailOrPasswordError,res))
    try {
        let user = await login(loginParams.email,loginParams.password);
        user = {id: user.id,fullName: user.fullName, email: user.email}
        const token = createToken(user,TOKEN_TYPES.userLogin);
        res.cookie('access_token',token,USER_LOGIN_TOKEN_SETTING);
        console.info({UserID : user.id, UserName : `${user.fullName}`},'user login success');
        return responseHandler(returnResponse(0,user,'Login success'),res)
    }
    catch (err)  {
        return (errorHandler(err,res))
    }
}

const userLogout = async (req,res) => {
    try {
        res.clearCookie("access_token", {domain: appDomain});
        return responseHandler('',res);
    }
    catch (err) {
        console.info('failed to logout user', err.message);
        return (errorHandler(err,res))
    }
}

const updateUser = async ({body,params},res) => {
    try {
        const user = body;
        const valid = userUpdateValidator.validate(user);
        if (valid.error)
            return (errorHandler(ERRORS.badInputFormat,res))
        if (!user.id)
            user.id =params.id;
        await updateUserByID(user);
        return responseHandler(user,res);
    }
    catch (err) {
        console.info('failed to update user', err.message);
        return (errorHandler(err,res))
    }
}

module.exports = {createNewUser,userLogin,userLogout,updateUser}
