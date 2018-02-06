var router = require('express').Router();
var mongoose = require('mongoose');

// return api status
router.get('/', function(req, res, next) {
  return res.json({
      // http://mongoosejs.com/docs/api.html#connection_Connection-readyState
      db_state: mongoose.connection.readyState
  });
});

module.exports = router;
