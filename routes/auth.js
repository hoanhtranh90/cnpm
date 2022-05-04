var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'sign in' });
});


router.get('/signup', function(req, res, next) {
    res.render('auth/signup', { title: 'sign up' });
});

router.get('/info', async  (req, res, next) => {
    let conn = await db.getConnection();

    let sql = `SELECT * FROM user WHERE user_id = 1`;
    const result = await conn.query(sql);
        console.log(result)
        res.render("auth/userInfo",{data: result});    
});

  
module.exports = router;
