const nodemailer = require('nodemailer');
require('dotenv/config')

const sendEmail = async (emailInfo) => {
    const { emailRecipients, emailBody } = emailInfo;

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
        subject: "ImgeStreamer CHG-HackDay 💻", // Subject line
        html: emailBody
    });
}

module.exports = {
    sendEmail
}