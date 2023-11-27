const Joi = require('joi');

const registerValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fullname: Joi.string(),
})

const loginValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
})

module.exports = { registerValidator, loginValidator }