const {verify} = require('./../utils/jwt');
const {User} = require('./../utils/sql/sql');
const {ERRORS} = require('./../utils/consts');
const appDomain = require('../utils/config').app.domain;
const {errorHandler} = require('../utils/response');

/**
 * middleware for access token validation
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
const verifyTokenMiddleware = async (req,res,next) => {
    const token = req.cookies.access_token
    try {
        const data = await verifyToken(token);
        const user =  await User.findOne({where : {id : data.id}})
        if (!user ) {
            throw new Error('User is not found');
        }
        req.user= user;
        req.tokenContent = {...data,access_token:token};
        next();
    }
    catch (err) {
        console.log("access_token removed due to:")
        console.log(err)
        res.clearCookie("access_token", {domain: appDomain});
        return errorHandler(ERRORS.badAccessToken,res);
    }
}

/**
 * helper func to verify token's payload
 * @param token
 * @returns {Promise<*>}
 */
const verifyToken = async (token) => {
    const data = verify(token)
    const expires = Date.parse(data.expires);
    const now =  Date.now();
    if (expires < now)
        throw new Error('Invalid Time');
    return data;
}

/**
 * middleware for verifying that the user can update only himself
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
const verifySelfToken = async (req,res,next) => {
    const token = req.cookies.access_token
    const data = verify(token);
    if(+data.id !== +req.body.id)
        throw new Error("Access Denied");
    next();
}
module.exports = {verifyTokenMiddleware,verifySelfToken}
