const Joi = require("joi");

const schemas = {
  login: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().length(8).required(),
  }),
  signup: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().length(8).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
};
module.exports = schemas;
