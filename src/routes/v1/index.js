const router = require("express").Router();
const UserRouter = require("./User.route");

router.get("/", (req, res) => {
  res.status(200).send("Demo Node Server");
});

router.use("/user", UserRouter);

module.exports = router;
