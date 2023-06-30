const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const sendEmail = async (data) => {
  try {
    const nodemailerConfig = {
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: "denis_zyrianov@meta.ua",
        pass: META_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(nodemailerConfig);

    const email = await transporter.sendMail({
      ...data,
      from: "denis_zyrianov@meta.ua",
    });
    return email;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
