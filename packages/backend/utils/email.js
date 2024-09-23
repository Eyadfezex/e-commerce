// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) Create a transporter
  // if (!options || options.email || options.subject || options.text) {
  //   throw new Error("Missing required options");
  // }
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    logger: true,
    debug: true,
    // Activate in gmail "less secure app" option (just if you use Gmail)
  });
  // 2) Define the email options
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };
  console.log(options.to, options.subject, options.message);
  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
