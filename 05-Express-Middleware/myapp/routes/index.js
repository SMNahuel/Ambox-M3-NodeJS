var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ejemplo', usuario: 'Nahuel' });
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '', usuario: 'Nahuel' });
});


module.exports = router;
