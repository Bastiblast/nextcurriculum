'use server'

export default async function serveVerificationMail() {

const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
host: process.env.NODEMAILER_SERVER,
port: 25,
secure: false, // true for 465, false for other ports
auth: {
user: process.env.SCW_DEFAULT_PROJECT_ID,
pass: process.env.SCW_SECRET_KEY,
},
});

console.log("send mail with transporter",transporter)
// Wrap in an async IIFE so we can use await.
const info = await transporter.sendMail({
    from: '"LionSide Mail Service" <contact@mail.lionside.fr>',
    to: "test-7z57srsvs@srv1.mail-tester.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
 

})
console.log("Message sent:", info.messageId);

}
