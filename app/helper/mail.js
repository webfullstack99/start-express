const nodemailer = require("nodemailer");
const Helper = require(`${__path.helper}/helper`);

module.exports = {

    // data - { account, mailData}
    sendMail: async function (data, doneCallback) {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: data.account,
        });

        // send mail with defined transport object
        let info = await transporter.sendMail(data.mailData);

        //console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        //if (!doneCallback && typeof doneCallback == 'function') 
        if (Helper.isFn(doneCallback)) doneCallback();
    }

}