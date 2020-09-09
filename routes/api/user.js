var express = require('express');
var router = express.Router();

let controller = 'user';
let viewFolder = `index/pages/${controller}`;
//const userModel = require(`${__path.models}/user`);
// mail

// INDEX
router.get('/', function (req, res, next) {
    res.json({
        message: `Hello, this is api for ${controller}`,
    })
});

module.exports = router;
