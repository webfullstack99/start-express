var express = require('express');
var router = express.Router();

let controller = 'general';

const mail = require(`${__path.helper}/mail`);

// INDEX
router.get('/', function (req, res, next) {
    res.json({
        message: `Hello, this is api for ${controller}`,
    })
});

// SEND MAIL
router.post('/send-mail', function (req, res, next) {
    mail.sendMail(req.body, () => {
        res.json({ status: 'success', });
    });
});

module.exports = router;
