const express = require("express");
const deletUserRouter = express.Router();
  
const userSchema = require("../models/User");

deletUserRouter.delete( '/delete-user/:id',  async ( req, res) => {
  
  const user = await userSchema.findByIdAndRemove(req.params.id);

  if(!user) {
    throw new Error();
  }

  res.status(204).send(user);
});

module.exports = deletUserRouter;
  