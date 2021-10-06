const router = require("express").Router();
const { UserController } = require("../../controllers");
const {
  ValidateRequestMiddleware,
  EncryptPassword,
} = require("../../middlewares");
const schemas = require("../../validations");

router.post(
  "/login",
  ValidateRequestMiddleware(schemas.login),
  UserController.login
);
router.post(
  "/signup",
  ValidateRequestMiddleware(schemas.signup),
  EncryptPassword,
  UserController.signup
);

module.exports = router;
