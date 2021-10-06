const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes/v1");

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/api/v1", routes);

mongoose.connect(config.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(config.PORT, () => {
    console.log(`Server listening to port ${config.PORT}`);
  });
});
