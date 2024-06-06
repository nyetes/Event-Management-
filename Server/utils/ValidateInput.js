const Joi = require("joi");

exports.validateEvent = (event) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    totalParticipants: Joi.number().integer().min(1).required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
  });

  return schema.validate(event);
};
