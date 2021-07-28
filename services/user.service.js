'use strict'

const {User} = require('./../utils/sql/sql')
const {ERRORS} = require('../utils/consts')
const {validPassword,hashPassword} = require('./../utils/password-manager')


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
    if(user.password?.length > 0)
        user.password = await hashPassword(user.password);
    return await User.update(user,{where : {id : user.id}})
}

const createUser = async (user) => {
    try{
        user.password = await hashPassword(user.password);
        return await User.create(user);
    } catch (err){
        throw ERRORS.userDuplicatedEmailError;
    }}

module.exports = {login,updateUserByID,createUser}
