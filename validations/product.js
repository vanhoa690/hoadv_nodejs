const Joi = require('joi');

const productValidator = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    rate: Joi.number().required(),
})

module.exports = productValidator