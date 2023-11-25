const Joi = require('joi');

const createUserValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    username: Joi.string(),
})

module.exports = createUserValidator