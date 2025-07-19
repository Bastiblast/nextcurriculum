'use server'

import { getSession } from "@/lib/auth-server";

export default async function serveVerificationMail() {
    const session = await getSession()

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
    to: session?.user.email,
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
 

})
console.log("Message sent:", info.messageId);

}
