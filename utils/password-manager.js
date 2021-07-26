'use strict'

const bcrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })
}

const validPassword = async (password,hashPassword) => {
    await new Promise((resolve, reject) => {
        bcrypt.compare(password, hashPassword, function(err, result) {
            if (!result) reject(result)
            resolve(result)
        });
    })
    return true;
}

module.exports = {hashPassword,validPassword};
