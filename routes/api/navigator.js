var express = require('express');
var router = express.Router();

router.all('/', (req, res, next) =>{
    res.json({
        message: 'support api for Pi To Trang Viet',
    })
});
router.use('/user', require('./user'));
router.use('/general', require('./general'));
module.exports = router;
