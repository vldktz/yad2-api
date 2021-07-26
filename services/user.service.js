'use strict'

const {User} = require('./../utils/sql/sql')
const {ERRORS} = require('../utils/consts')
const {validPassword} = require('./../utils/password-manager')

const login = async (email, password) =>{
    try {
        const user = await User.findOne({where : {email}});
        if (!user)
            throw ERRORS.wrongEmailOrPasswordError;
        await validPassword(password,user.password);
        return user;
    }
    catch (err) {
        throw ERRORS.wrongEmailOrPasswordError;
    }
}

const updateUserByID = async (user) => {
    return await User.update(user,{where : {id : user.id}})
}

const createUser = async (user) => {
    try{
        const user = await User.create(user);
        return user;
    } catch (err){
        throw ERRORS.userDuplicatedEmailError;
    }}

module.exports = {login,updateUserByID,createUser}
