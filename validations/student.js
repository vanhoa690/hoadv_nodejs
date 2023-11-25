const Joi = require('joi');

const registerValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    fullname: Joi.string(),
})

module.exports = registerValidator