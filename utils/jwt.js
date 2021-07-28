'use strict'

const jwt = require('jsonwebtoken');
const jwtSecret = require('./config').app.jwt
const {ERRORS} =require('./consts');
const createToken = (object,extraConfig) => {
    return jwt.sign({...object, ...extraConfig}, jwtSecret);
}

const verify = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch(err) {
        throw ERRORS.badAccessToken
    }
}



module.exports = {createToken,verify};
