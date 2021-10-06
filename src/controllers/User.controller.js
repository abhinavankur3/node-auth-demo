const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { UserModel } = require("../models");
const login = async (req, res) => {
  try {
    let user = await UserModel.find({ email: req.body.email });
    if (!user || !user.length) {
      throw new Error("No user found");
    }
    user = user[0];
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error("Invalid creds");
    }
    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      config.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).send({ sucess: true, user, token });
  } catch (err) {
    res
      .status(500)
      .send({ sucess: false, error: { message: err.message, code: err.code } });
  }
};
const signup = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    const token = jwt.sign(
      { user_id: user._id, email: user.email },
      config.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.status(200).send({ sucess: true, token });
  } catch (err) {
    res
      .status(500)
      .send({ sucess: false, error: { message: err.message, code: err.code } });
  }
};

module.exports = {
  login,
  signup,
};
