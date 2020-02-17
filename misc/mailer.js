var nodemailer = require('nodemailer');
var config = require('../config/mail');
var smtpTransport = require("nodemailer-smtp-transport")
var transport = nodemailer.createTransport(smtpTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    // secure: true, // true for 465, false for other ports
    // service: config.service,
    auth: {
        user: "coder",//config.mailUserName,
        pass: "9928466181"//config.mailPassword,
    },
    tls:{
        rejectUnauthorized: false
    }
}));
module.exports ={
    sendEmail(from, to,bcc,replyTo , subject, html, attachments){
        return new Promise(function(resolve, reject){
            transport.sendMail({from, subject, to,bcc,replyTo, html, attachments},function(err,info){
                if(err) reject(err);
                resolve(info);
            });
        });
    }
}