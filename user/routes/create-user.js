const express = require("express");
const { body, validationResult } = require('express-validator');
const createUserRouter = express.Router();
  
let User = require("../models/User");

createUserRouter.post( 
  '/create-user', 
  [
    body('email')
    .custom( async ( email ) => {

        const user = await User.findOne( { email } );

        if (user) {
          throw new Error('Email already in use');
        }
    }),
    body('phonenumber')
    .isNumeric()
    .withMessage('Phone Number must be numberic value')
  ],
  async ( req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
  const user = await User.create(req.body);

  if(!user) {
    throw new Error();
  }

  res.status(201).send(user);
});

module.exports = createUserRouter;
  