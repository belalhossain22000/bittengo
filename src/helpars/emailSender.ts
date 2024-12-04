import nodemailer from "nodemailer";
import config from "../config";

const emailSender = async (subject: string, email: string, html: string) => {
  console.log(config.emailSender.app_pass, config.emailSender.email);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "belalhossain22000@gmail.com",
      pass: "yhmc cins tgir yaof",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: `"Bittengo" <belalhossain22000@gmail.com>`,
    to: "belalhossain22000@gmail.com",
    subject: `${subject}`,
    html,
    replyTo: email,
  });

  console.log("Message sent: %s", info.messageId);
};

export default emailSender;
