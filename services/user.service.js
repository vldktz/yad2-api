'use strict'

const {User} = require('./../utils/sql/sql')
const {ERRORS} = require('../utils/consts')
const {validPassword} = require('./../utils/password-manager')

const login = async (email, password) =>{
    try {
        const user = await User.findOne({where : {email}});
        if (!user)
            throw ERRORS.WrongEmailOrPasswordError;
        await validPassword(password,user.password);
        return user;
    }
    catch (err) {
        throw ERRORS.WrongEmailOrPasswordError;
    }
}

module.exports = {login}
