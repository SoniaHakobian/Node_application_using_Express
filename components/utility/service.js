const AppConstants = require('./../settings/constants');

const ErrorTypes = {

  FIRST_NAME_MISSING: 'first_name_missing',
  LAST_NAME_MISSING: 'last_name_missing',
  INVALID_FIRST_NAME_RANGE: 'invalid_first_name_range',
  INVALID_LAST_NAME_RANGE: 'invalid_last_name_range',
  UNKNOWN_ERROR: 'unknown_error'
};

class Utility {

  static parseQuery(req, res, next) {
    req.query.offset = parseInt(req.query.offset);
    if (!isFinite(req.query.offset)) {
      req.query.offset = AppConstants.OFFSET_DEFAULT_VALUE;
    }
    req.query.limit = parseInt(req.query.limit);
    if (!isFinite(req.query.limit)) {
      req.query.limit = AppConstants.LIMIT_DEFAULT_VALUE;
    }
    next();
  }
  static generateErrorMessage(type, options) {
    options = options || {};
    let error_object = {
      type: type || ErrorTypes.UNKNOWN_ERROR,
      message: 'Something went wrong..'
    };
    switch (type) {
      case ErrorTypes.FIRST_NAME_MISSING:
      error_object.message = 'First name is not specified.';
      break;
      case ErrorTypes.LAST_NAME_MISSING:
      error_object.message = 'Last name is not specified.';
      break;
      case ErrorTypes.INVALID_FIRST_NAME_RANGE:
      error_object.message = 'Invalid min/max value for first name, must be >= {min} and <= {max}, your value is: {val}'.replace('{min}', AppConstants.FNAME_MIN_LENGTH)
      .replace('{max}', AppConstants.FNAME_MAX_LENGTH);
      break;
      case ErrorTypes.INVALID_LAST_NAME_RANGE:
      error_object.message = 'Invalid min/max value for password, must be >= {min} and <= {max}, your value is: {val}'.replace('{min}', AppConstants.LNAME_MIN_LENGTH)
      .replace('{max}', AppConstants.LNAME_MAX_LENGTH);
      break;
    }
    return error_object;
  }
}
module.exports = Utility;
module.exports.ErrorTypes = ErrorTypes;
