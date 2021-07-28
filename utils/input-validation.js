'use strict'

const Joi = require('joi');

const userLoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const userUpdateValidator = Joi.object({
    id: Joi.number(),
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
})

const userCreateValidator = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const offerCreateValidator = Joi.object({
    userID: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required().max(200),
    offerTypeID: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
})
module.exports = {userLoginValidator,userUpdateValidator,userCreateValidator,offerCreateValidator}
