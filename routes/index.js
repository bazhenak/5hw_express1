const express = require('express');
const router = express.Router();

let users = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get("/aaaa", function (req,res, next) {
  res.send("hello")
});

router.post('/create', function(req, res, next) {
  users.push(req.body)
  res.send('new user was created');
});

module.exports = router;
