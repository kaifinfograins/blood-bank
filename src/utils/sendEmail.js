
const nodemailer = require('nodemailer');
const sendEmailData = require("./emailFormat");

const SENDMAIL = async (user, contactUs) => {

    let mailOptions = {}
    if (contactUs === true) {
        mailOptions = {
            to: user.email,
            from: "divyachourasiya.infograins@gmail.com",
            subject: user.subject,
            html: sendEmailData.HTML_TEMPLATE(user)
        };
    }else if(contactUs === "signup"){
        mailOptions = {
            to: user.email,
            from: "jyotibasediya.infograins@gmail.com",
            subject: "OTP Verification",
            html: sendEmailData.HTML_TRMPLET_OTP(user)
        };
    }else if(contactUs ==="subscribe"){
        mailOptions = {
            to: user.email,
            from: "divyachourasiya.infograins@gmail.com",
            subject: "Subscribe to newsletter",
            html: sendEmailData.HTML_TEMPLATE_SUBSCRIBE(user)
        }; 
    }else {
        mailOptions = {
            to: user.email,
            from: "divyachourasiya.infograins@gmail.com",
            subject: "Reset Your Password",
            html: '<div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#00000 url(https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png) top center / cover no-repeat;" align="center" border="0" background="https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png"><tbody><tr>' +
                '<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:57px;"> <div style="cursor:auto;color:white;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:36px;font-weight:600;line-height:36px;text-align:center;">Welcome to PBM coin </div></td></tr></tbody></table><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"> <tbody>' +
                '<tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px;"><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody> <tr> <td style="word-break:break-word;font-size:0px;padding:0px 0px 20px;" align="left"><div style="cursor:auto;color:#737F8D;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;"><h2 style="font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;">' + user.first_Name + ' ' + user.last_Name + ',</h2><p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process</p></div></td> </tr>' +
                '<tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0"><tbody><tr><td style="border:none;border-radius:3px;color:white;cursor:auto;padding:15px 19px;" align="center" valign="middle" bgcolor="#396cf0">' +
                '<a href="http://192.168.0.28:3000' +
                "/reset_pwd/" +
                user._id + '/'+user.role+'/' + user.resetToken +
                '"style="text-decoration:none;line-height:100%;background:#396cf0;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;font-weight:normal;text-transform:none;margin:0px;">Verify Email</a></td></tr></tbody></table> </td></tr></tbody></table></div></td> </tr></tbody></table></div>'

        };
    }
    return mailOptions
}


// const SENDMAIL = async (user,contactUs ) => {
//     console.log(user.email);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         // host: "smtp.gmail.com",
//         // port: 465,
//         // secure: true, // secure:true for port 465, secure:false for port 587
//         //  transportMethod: 'SMTP',
//         auth: {
//             user: user.email,
//             pass: "qxdujecsoudvqznj"
//         },
//     });
//     let mailOptions ={}
//     if(contactUs === true){
//    mailOptions = {
//         from: user.email,
//         to: 'noreply@easeaccount.in',
//         subject: user.subject,
//         text: 'Hello People!, Welcome to PBM coin !',
//         html: sendEmailData.HTML_TEMPLATE(user)
//     };
// }else{
//    mailOptions = {
//         from: user.email,
//         to: 'noreply@easeaccount.in',
//         subject: user.subject,
//         text: 'Hello People!, Welcome to PBM coin !',
//         html: '<div style="max-width:640px;margin:0 auto;box-shadow:0px 1px 5px rgba(0,0,0,0.1);border-radius:4px;overflow:hidden"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#00000 url(https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png) top center / cover no-repeat;" align="center" border="0" background="https://cdn.discordapp.com/email_assets/f0a4cc6d7aaa7bdf2a3c15a193c6d224.png"><tbody><tr>'+
//         '<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:57px;"> <div style="cursor:auto;color:white;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:36px;font-weight:600;line-height:36px;text-align:center;">Welcome to PBM coin </div></td></tr></tbody></table><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;" align="center" border="0"> <tbody>'+
//         '<tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:40px 70px;"><div aria-labelledby="mj-column-per-100" class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody> <tr> <td style="word-break:break-word;font-size:0px;padding:0px 0px 20px;" align="left"><div style="cursor:auto;color:#737F8D;font-family:Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-size:16px;line-height:24px;text-align:left;"><h2 style="font-family: Whitney, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;font-weight: 500;font-size: 20px;color: #4F545C;letter-spacing: 0.27px;">'+user.first_Name+' '+user.last_Name+',</h2><p>You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
//         'Please click on the following link, or paste this into your browser to complete the process</p></div></td> </tr>'+
//         '<tr><td style="word-break:break-word;font-size:0px;padding:10px 25px;" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="center" border="0"><tbody><tr><td style="border:none;border-radius:3px;color:white;cursor:auto;padding:15px 19px;" align="center" valign="middle" bgcolor="#396cf0">'+
//         '<a href="http://192.168.0.28:3000'+
//         "/reset_pwd/"+
//         user._id+'/'+user.resetToken+
//         '"style="text-decoration:none;line-height:100%;background:#396cf0;color:white;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:15px;font-weight:normal;text-transform:none;margin:0px;">Verify Email</a></td></tr></tbody></table> </td></tr></tbody></table></div></td> </tr></tbody></table></div>'

//     };
// }

//     return  transporter.sendMail(mailOptions)
// }


module.exports = {
    SENDMAIL,
};