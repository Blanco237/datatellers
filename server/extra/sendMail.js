const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const { Users } = require('../models');
require('dotenv').config();


const sendMail = (data, email) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    const handlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve('./templates'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./templates'),
        extName: ".handlebars"
    }

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: {
            name: "DrNG - DataTellers",
            address: process.env.USER_EMAIL
        },
        to: email,
        subject: "New Appointment",
        template: "email",
        context: {
            code: data.code,
            name: data.name,
            status: data.status,
            appt: data.appt,
            time: data.time,
            link: `https://datatellers.vercel.app/edit/${data.code}`
        }
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(`Email sent to: ${email}  Info: ${info.response}`);
        }
    })
}

const sendEmails = async (data) => {
    try {
        const admins = await Users.findAll({
            where: {
                role: 'admin'
            }
        });
        admins.forEach((admin) => {
            sendMail(data, admin.email);
        })
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = sendEmails;