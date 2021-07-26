'use strict'

const Joi = require('joi');

const userLoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const userUpdateValidator = Joi.object({
    id: Joi.number(),
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
})

const createUpdateValidator = Joi.object({
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = {userLoginValidator,userUpdateValidator,createUpdateValidator}
