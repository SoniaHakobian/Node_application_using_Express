const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppConstants = require('./../../settings/constants');

let UsersSchema = Schema({
  firstName: {
    type: String,
    minlength: AppConstants.FNAME_MIN_LENGTH,
    maxlength: AppConstants.FNAME_MAX_LENGTH
  },
  lastName: {
    type: String,
    minlength: AppConstants.LNAME_MIN_LENGTH,
    maxlength: AppConstants.LNAME_MAX_LENGTH
  },
  birthdate: {
    type: String
  },
  address: {
    type: String
  },
  address2: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  postalCode: {
    type: Number
  },
  deleted:
  {
    type: Boolean,
    default: false,
    index: true
  }
});


module.exports = mongoose.model('users', UsersSchema);
