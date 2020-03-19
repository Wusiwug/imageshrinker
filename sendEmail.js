const nodemailer = require('nodemailer');

const sendEmail = async (emailInfo) => {
    const { emailRecipients, emailBody, emailSubject } = emailInfo;

    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASS
        }
    });

    let info = await transporter.sendMail({
        from: '"ImgeStreamer 🚀" <imgstream@zyphex.com>', // sender address
        to: emailRecipients,
        subject: emailSubject,
        html: emailBody
    });

    console.log("*** email status: ", info);
}

module.exports = {
    sendEmail
}