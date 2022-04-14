const express = require("express");
const listUserRouter = express.Router();
  
let userSchema = require("../models/User");
  
listUserRouter.get("/list-user", async (req, res) => {

  const users = await userSchema.find({});

  if(!users) {
    throw new Error();
  }

  res.status(200).send(users);
});

module.exports = listUserRouter;
  