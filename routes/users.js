var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  var users = [{name:"one",age:18},{name:"two",age:18},{name:"three",age:18}]
  res.send(users);
});

module.exports = router;
