'use server'


const OptionsType = {
        to: 'somebody@somewhere.ok',
        subject: "Verify your email address",
        text: `Click the link to verify your email:`,
      }

export default async function serveVerificationMail(mailOptions: typeof OptionsType) {

const {to,subject,text} = mailOptions        

const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
host: "localhost",
port: 25,
secure: false, // true for 465, false for other ports
auth: {
user: process.env.POSTFIX_USER,
pass: process.env.PASSWORD,
},
    tls: {
        rejectUnauthorized: false
    }
});

console.log("send mail with transporter",transporter)
// Wrap in an async IIFE so we can use await.
const info = await transporter.sendMail({
    from: '"LionSide Mail Service" <contact@lionside.fr>',
    to: to,
    subject: subject,
    text: text, // plain‑text body
    html: `<b>${text}</b>`, // HTML body
 

})
console.log("Message sent:", info.messageId);

}