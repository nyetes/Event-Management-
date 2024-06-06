const { validateEvent } = require("../../Server/utils/ValidateInput");

module.exports = (req, res, next) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};
