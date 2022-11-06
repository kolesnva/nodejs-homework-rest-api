const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[+]?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
    .required(),
  favorite: Joi.bool(),
});

const joiFavoriteContactSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  joiContactSchema,
  joiFavoriteContactSchema,
};
