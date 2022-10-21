const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
require('dotenv').config();


const sendMail = (data) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    });

    const handlebarOptions = {
        viewEngine: {
            extName : ".handlebars",
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
        to: 'asongrandy9@gmail.com',
        subject: "New Appointment",
        template: "email",
        context: {
            code: data.code,
            name: data.name,
            status: data.status,
            appt: data.appt,
            time: data.time,
            link: "google.com"
        }
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            console.error(err);
        }
        else{
            console.log("Email sent: " + info.response);
        }
    })
}

module.exports = sendMail;