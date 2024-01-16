import nodemailer from "nodemailer"
import config from "@/config";

export const nodeMailerTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.gAppName,
    pass: config.gAppPW,
  },
});