const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"text":'respond with a resource'});
});

module.exports = router;
