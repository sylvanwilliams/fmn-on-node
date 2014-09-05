var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Forget Me Not' });
});

router.get('/location',function(req,res){
  res.render('location',{title: 'Location' });
});

router.get('/goods',function(req,res){
  res.render('goods',{title: 'Location' });
});

router.get('/treats',function(req,res){
  res.render('treats',{title: 'Location' });
});

module.exports = router;
