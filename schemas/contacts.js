const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^[+]?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/),
});

module.exports = contactSchema;
