'use strict'
const {returnResponse} = require('./response')
const domain = require('./config').app['domain'];
const whitelist = require('./config').app.cors.whitelist;


const HTTP_STATUS_CODES = {
    OK: 200,
    BADREQUEST: 400,
    NOTFOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401,
    SERVERERROR: 500,
};

const ERRORS = {
    badAccessToken : returnResponse(5, {},'Invalid access_token',HTTP_STATUS_CODES.FORBIDDEN),
    userEmailOrPasswordError : returnResponse(1, {},'Bad email or password input format',HTTP_STATUS_CODES.BADREQUEST),
    WrongEmailOrPasswordError : returnResponse(2, {},'Wrong email or password',HTTP_STATUS_CODES.BADREQUEST),
}

const USER_LOGIN_TOKEN_SETTING = {
    expires: new Date(Date.now() + 3600000*24),
    secure: false,
    httpOnly: true,
}

const TOKEN_TYPES = {
    userLogin : {
        expires :USER_LOGIN_TOKEN_SETTING.expires
    }
}


if (!domain.includes('localhost'))
    USER_LOGIN_TOKEN_SETTING.domain = `.${domain}`;

const CORS_OPTIONS = {
    origin: function (origin, callback) {
        if (whitelist.split(",").indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

module.exports = {
    HTTP_STATUS_CODES,ERRORS,
    USER_LOGIN_TOKEN_SETTING,
    CORS_OPTIONS,
    TOKEN_TYPES
};
