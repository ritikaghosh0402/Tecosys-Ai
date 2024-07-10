/* eslint-disable no-undef */

const nodemailer = require("nodemailer");
require("dotenv").config()

exports.transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    // port: 587, // or 465 for SSL
    // secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
})