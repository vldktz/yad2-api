'use strict'

const Joi = require('joi');

const userLoginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});
