const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async (mailOptions) => {
  await transporter.sendMail(
    { from: process.env.EMAIL_USERNAME, ...mailOptions },
    (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.table(info);
    }
  );
};
module.exports = { sendMail };
