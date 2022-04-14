const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  phonenumber: {
    type: String
  },
  profile: {
    type: String
  }
}, 
{
	collection: 'users'
})

module.exports = mongoose.model('User', userSchema);
