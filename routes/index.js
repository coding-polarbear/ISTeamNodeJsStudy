var express = require('express');
var router = express.Router();

var idx = 0;

var users = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , idx : users.length, users : users});
});

/* GET home page. */
router.get('/register/:id/:name', function(req, res, next) {
    var id = req.params.id;
    var name = req.params.name;
    users.push({id : id, name : name});
    res.send(id + ", " + name);
});

module.exports = router;
