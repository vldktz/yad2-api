'use strict'

const {responseHandler,errorHandler,returnResponse} = require('../utils/response');
const {userLoginValidator} = require('./../utils/input-validation');
const {ERRORS,TOKEN_TYPES,USER_LOGIN_TOKEN_SETTING} = require('../utils/consts');
const {login} = require('./../services/user.service');
const {createToken} = require('../utils/jwt');
const appDomain = require('../utils/config').app.domain;


const userLogin = async ({body}, res) => {
    const loginParams = body;
    const valid = userLoginValidator.validate(loginParams);
    if (valid.error)
        return (errorHandler(ERRORS.userEmailOrPasswordError,res))
    try {
        let user = await login(loginParams.email,loginParams.password);
        user = {id: user.id,fullName: user.fullName}
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

module.exports = {userLogin,userLogout}
