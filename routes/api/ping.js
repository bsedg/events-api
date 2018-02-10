var router = require('express').Router();
var mongoose = require('mongoose');

// return api status
router.get('/', function(req, res, next) {
  var status = 500;
  var message = "";
  // http://mongoosejs.com/docs/api.html#connection_Connection-readyState
  if (mongoose.connection.readyState === 1) {
    status = 200;
    message = "Success";
  } else {
    switch (mongoose.connection.readyState) {
      case 0: message = "Database disconnected";
      case 1: message = "Database connected"; // should not reach
      case 2: message = "Database connecting";
      case 3: message = "Database disconnecting";
      default: message = "Unknown error with database";
    }
  }

  return res.status(status).json({
      message: message
    });
});

module.exports = router;
