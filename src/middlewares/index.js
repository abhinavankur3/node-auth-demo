const bcrypt = require("bcryptjs");

const ValidateRequestMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  };
};
const EncryptPassword = async (req, res, next) => {
  encryptedPassword = await bcrypt.hash(req.body.password, 10);
  req.body.password = encryptedPassword;
  next();
};
module.exports = { ValidateRequestMiddleware, EncryptPassword };
