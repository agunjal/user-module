const express = require("express");
const updateUserRouter = express.Router();
  
let User = require("../models/User");

updateUserRouter.get( '/update-user/:id',  async ( req, res) => {
  
  const user = await User.findById(req.params.id);

  if(!user) {
    throw new Error();
  }

  res.status(200).send(user);
});

updateUserRouter.put( '/update-user/:id',  async ( req, res) => {
  
  const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });

  if(!user) {
    throw new Error();
  }

  res.status(200).send(user);
});

module.exports = updateUserRouter;
  