'use strict'

const Joi = require('joi');

/**
 * validation for user login params
 * @type {Joi.ObjectSchema<any>}
 */
const userLoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

/**
 * validation for user update params
 * @type {Joi.ObjectSchema<any>}
 */
const userUpdateValidator = Joi.object({
    id: Joi.number(),
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
})

/**
 * validation for user create params
 * @type {Joi.ObjectSchema<any>}
 */
const userCreateValidator = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

/**
 * validation for offer create params
 * @type {Joi.ObjectSchema<any>}
 */
const offerCreateValidator = Joi.object({
    userID: Joi.number().required(),
    title: Joi.string().required(),
    description: Joi.string().required().max(200),
    offerTypeID: Joi.number().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
})
module.exports = {userLoginValidator,userUpdateValidator,userCreateValidator,offerCreateValidator}
