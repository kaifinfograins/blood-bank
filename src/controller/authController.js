const authModelSchema = require("../model/authModel");
// const subscribeModel = require("../models/subscribe");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const {ObjectId } = require('mongodb');
const Joi = require("joi");
const { encode } = require("../common/token");
const { message } = require("../common/message");
const emailContact = require("../utils/sendEmail")
const sgMail = require("@sendgrid/mail");


//demo branch

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

function generateResetToken() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  return resetToken;
}

function generateOTP() {
  var otp = Math.floor(100000 + Math.random() * 900000)
  otp = otp.toString().substring(0, 6);
  return otp;
}

function checkStatus(userData) {
  if(userData.is_varified === 0){
    return{status: false, message:"Your credentials is not found ! please create account"}
  }else if(userData.is_varified === 2){
    return {status: false,message:"Your Account is Block !"}
  }else{
    return {status: true,message:"check"}
  }
}

function checkOTPStatus(userData) {
  if(userData.is_varified === 1){
    return{status: false, message:"Your Account is Verify Please Login"}
  }else if(userData.is_varified === 2){
    return {status: false,message:"Your Account is Block"}
  }else {
    return {status: true,message:"check"}
  }sendEmailData
}

function checkUserVarification(userData) {
  if(userData.is_varified === 1){
    return{status: false, message:"Your account is already exists! Please Login"}
  }else if(userData.is_varified === 2){
    return {status: false,message:"Your Account is Block!"}
  }else {
    return {status: true,message:"check"}
  }
}

async function emailService(saveData, valid) {
  console.log(saveData);
  const storeEmailResponse = await emailContact.SENDMAIL(saveData, valid);
  return storeEmailResponse;
}

async function storeDetails(first_Name, last_Name, email, is_varified, password, role,phoneNumber) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const createRegister = await authModelSchema({
    first_Name,
    last_Name,
    email,
    is_varified,
    password: hashedPassword,
    role,
    phoneNumber,
    otp: generateOTP()
  })
  return createRegister;
}

async function deleteUser(id) {
 let deleteUser = await authModelSchema.findOneAndDelete({ _id: id });
 return deleteUser;
}


/*User - Sign-up */
const createRegisterAuth = async (req, res) => {
  try {
    const { first_Name, last_Name, email, password, confirm_Password,phoneNumber, role, is_varified } = req.body;

    const schema = await Joi.object({
      first_Name: Joi.string().trim().regex(/^[a-zA-Z0 ]/, 'please enter valid first name')
        .min(3).max(25).required().messages({
          "string.empty": `Please enter your first name`,
          "string.trim": `White space not allowed!`,
          "string.first_Name": `please enter valid First Name.`,
          "string.min": `First name must be at least 3 characters long.`,
          "string.max": `Maximum 25 characters are allowed in the First name.`,
        }),
      last_Name: Joi.string().regex(/^[a-zA-Z0 ]*$/, 'please enter valid last name')
        .min(3).max(25).required().messages({
          "string.empty": `Please enter your last name`,
          "string.last_Name": `please enter valid last_Name.`,
          "string.min": `last name must be at least 3 characters long.`,
          "string.max": `Maximum 25 characters are allowed in the Last name.`,
        }),
      email: Joi.string().email().required().messages({
        "string.empty": `Please enter your email address.`,
        "string.email": `please enter valid email address.`
      }),
      is_varified: Joi.string().required().messages({
        "string.empty": `Please enter your is_varified number.`,
        "string.is_varifies": `please enter valid is_varified number.`
      }),
      password: Joi.string().min(6).max(16).required().messages({
        "string.empty": `Password is a required field.`,
        "string.min": `Password must be at least 6 characters long.`,
        "string.max": `Password must be at least 16 characters short.`
      }),
      confirm_Password: Joi.string().valid(Joi.ref('password')).min(6).max(16).required().messages({
        "string.empty": `confirm_Password is a required field.`,
        "string.min": `confirm_Password must be at least 6 characters long.`,
        "string.max": `confirm_Password must be at least 16 characters short.`,
        "any.only": `password and confirm password does not matched`
      }),
      role: Joi.string().allow('buyer', 'supplier').required().messages({
        "string.empty": `role is a required field.`,
        "string.role": `role must be at least one enum value select.`,
      }),
      phoneNumber: Joi.string().regex(/^[0-9]{4,16}$/).required().messages({
        'string.pattern.base': `Phone number must have  required 4 to 16 digit number.`,
        "string.phoneNumber": `please enter valid phone Number .`})
    });

    const validation = schema.validate({
      first_Name,
      last_Name,
      email: email,
      is_varified: is_varified,
      password: password,
      confirm_Password,
      phoneNumber,
      role,
    });

    if (validation.error) {
      return res.status(411).send({
        status: 411,
        message:validation.error.details[0].message,
      });
    }

    let createRegister = ''
    if (role === 'visitor') {
      const visitorDetail = await authModelSchema.findOne({ role, email });
      console.log(visitorDetail);
      if(visitorDetail){
      const checkUserDetails = await checkUserVarification(visitorDetail)
      if (checkUserDetails.status === true) {
        await deleteUser(visitorDetail._id);
       }else{
       return res.status(409).json({ status: 409, message:checkUserDetails.message });
       }
      }

      createRegister = await storeDetails(first_Name, last_Name, email, is_varified, password, role,phoneNumber);

    } else if (role === "doner") {
      const donerDetail = await authModelSchema.findOne({ role,email});
      if(donerDetail){
      const checkUserDetails = await checkUserVarification(donerDetail)
      if (checkUserDetails.status === true) {
       await deleteUser(donerDetail._id);
      }else{
      return res.status(409).json({ status: 409, message:checkUserDetails.message });
      }
    }
    createRegister = await storeDetails(first_Name, last_Name, email, is_varified, password, role,phoneNumber);

    }
  

    const result = await createRegister.save()

    if (result) {
      const emailresponse = await emailService(result, 'signup');
      
      sgMail.setApiKey(process.env.SENDGRID_KEY);
      sgMail.send(emailresponse)
        .then((response) => {
          console.log(response);
          res.status(200).json({
            status: 200,
            message: message.USER_REGISTRATION,
            details: result
          })
        })
        .catch((error) => {
          res.status(409).json({ status: false, message: 'Email not Send please Try Again' });
        });
    } else {
      res.status(409).json({ status: false, message: 'Internal server error' });
    }

  } catch (error) {
    console.log(error, "error----------------")
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE
    });
  }
}

//Email-Verify - verify-email
const  verifyOTP = async (req, res) => {
  try {
    const { id, otp } = req.body;

    const OTPvarificatopn = await authModelSchema.findById({ _id: new ObjectId(id) });
    const checkOTPStatu = checkOTPStatus(OTPvarificatopn)
    if (checkOTPStatu.status) {
      if (OTPvarificatopn?.otp != otp) {
        return res.status(409).json({ status: false, message: "OTP Can't Match Please try again" });
      }

      const updateInfo = await authModelSchema.updateOne({ _id: id },{ $set: { is_varified: 1, } });

      const resultData = await authModelSchema.findById({ _id: new ObjectId(id) });
      if (updateInfo) {
        const token = await encode({ id: resultData });
        res.status(200).json({
          status: 200,
          message: "OTP verification complet ",
          token: token,
          details: resultData
        })

      } else {
        res.status(409).json({ status: 409, message: 'Data Not Update' });
      }

    } else {
      return res.status(409).json({ status: 409, message:checkOTPStatu.message });
    }

  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE
    });
  }
};

const resetOTP = async (req, res) => {
  try {
    const { id } = req.body;
    const updateInf = await authModelSchema.findOne({ _id: id })
    const token = await encode({ id: updateInf });
     const checkOTPStatu = checkOTPStatus(updateInf)
    if (checkOTPStatu.status) {

      const updateInfo = await authModelSchema.updateOne({ _id: id },
        { $set: { otp: generateOTP(), } });

        const updateInformation = await authModelSchema.findOne({ _id: id })
      if (updateInfo) {

        const emailresponse = await emailService(updateInformation, 'signup');

        sgMail.setApiKey(process.env.SENDGRID_KEY);
        sgMail.send(emailresponse)
          .then((response) => {
            console.log(response);
            res.status(200).json({
              status: true,
              message: "reset OTP successfully",
              token: token,
              details: updateInformation
            })
          })
          .catch((error) => {
            console.log(error);
            res.status(409).json({ status: 409, message: 'Email not Send please Try Again' });
          });

      } else {
        res.status(409).json({ status: 409, message: 'Internal server error' });
      }
    } else {
      return res.status(409).json({ status: 409, message:checkOTPStatu.message });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE
    });
  }
};

/*User- Login */
const authLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const schema = await Joi.object({
      email: Joi.string().email().required().messages({
        "string.empty": `Please enter your email address.`,
        "string.email": `please enter valid email address.`
      }),
      password: Joi.string().min(6).max(16).required().messages({
        "string.empty": `Password is a required field.`,
        "string.min": `Password must be at least 6 characters long.`,
        "string.max": `Password must be at least 16 characters short.`
      }),

      role: Joi.string().required().messages({
        "string.empty": `role is a required field.`,
        "string.role": `please enter valid role.`
      }),
    });
    const validation = schema.validate({
      email: email,
      password: password,
      role
    });

    if (validation.error) {
      return res.status(411).send({
        status: 411,
        message:validation.error.details[0].message,
      });
    }

    let token = '';
    let userDetail = {};
    if (role === 'visitor') {
      const visitor = await authModelSchema.findOne({ role, email });
      
      if (!visitor) {
        return res.status(409).json({
          status: 409,
          message: "Your credentials is not found ! Please check your email or role",
        })
      }
      const checkvarification =  checkStatus(visitor);
      if(checkvarification.status){
      const isPasswordCheck = await validatePassword(password, visitor.password);
      if (!isPasswordCheck) {
        return res.status(422).json({
          status: 422,
          message: message.PASSWORD_NOT_MATCH,
        });
      }

      token = await encode({
        id: visitor,
      });
      userDetail = {
        first_Name: visitor.first_Name,
        last_Name: visitor.last_Name,
        email: visitor.email,
        role: visitor.role,
        is_varified: visitor.is_varified,
        _id: visitor._id,
        createdAt: visitor.createdAt,
        updateAt: visitor.updateAt,
        phoneNumber:visitor.phoneNumber,
      }
    }else{
      return res.status(412).json({
        status: 412,
        message: checkvarification.message,
      });
    }

    } else if (role === 'doner') {
      const doner = await authModelSchema.findOne({ role, email });

      if (!doner) {
        return res.status(409).json({
          status: 409,
          message: "Your credentials is not found ! Please check your email or role",
        })
      }
      const checkvarification = await checkStatus(doner);
      if(checkvarification.status){
      const isPasswordcheckAdmin = await validatePassword(password, doner.password);
      if (!isPasswordcheckAdmin) {
        return res.status(422).json({
          status: 422,
          message: message.PASSWORD_NOT_MATCH,
        });
      }

      token = await encode({
        id: doner,
      });
      userDetail = {
        _id: doner._id,
        first_Name: doner.first_Name,
        last_Name: doner.last_Name,
        email: doner.email,
        role: doner.role,
        is_varified: doner.is_varified,
        createdAt: doner.createdAt,
        updateAt: doner.updateAt,
        phoneNumber:doner.phoneNumber,
      }
    }else{
      return res.status(412).json({
        status: 412,
        message: checkvarification.message,
      });
    }
    } 
   
    else if (role === 'admin') {
      const admin = await authModelSchema.findOne({ role, email });

      if (!admin) {
        return res.status(409).json({
          status: 409,
          message: "Your credentials is not found ! Please check your email or role",
        })
      }
      const isPasswordCheck = await validatePassword(password, admin.password);
      if (!isPasswordCheck) {
        return res.status(422).json({
          status: 422,
          message: message.PASSWORD_NOT_MATCH,
        });
      }subscribe,

      token = await encode({
        id: admin,
      });

      userDetail = {
        _id: admin._id,
        first_Name: admin.first_Name,
        last_Name: admin.last_Name,
        email: admin.email,
        role: admin.role,
        is_varified: admin.is_varified,
        createdAt: admin.createdAt,
        updateAt: admin.updateAt,
        phoneNumber:admin.phoneNumber,
      }
    }


    return res.status(200).json({
      status: 200,
      message: message.USER_LOGIN,
      token: token,
      details: userDetail
    });

  } catch (error) {
    console.log("error----------------------", error);
    return res.status(500).json({
      status: 500,
      message: message.ERROR_MESSAGE,
    });
  }
}

/*  Forgot password  */
const forgotPassword = async (req, res) => {
  const { email, role } = req.body;

  try {

    const schema = await Joi.object({
      email: Joi.string().email().required().messages({
        "string.empty": `Please enter your email address.`,
        "string.email": `please enter valid email address.`
      }),
      role: Joi.string().required().messages({
        "string.empty": `role is a required field.`,
        "string.role": `please enter valid role.`
      }),
    });

    const validation = schema.validate({
      email: email,
      role: role,
    });


    if (validation.error) {
      return res.status(422).send({
        status: 422,
        message: validation.error.details,
      });
    }
    
    let user ='';
    if (role === 'doner') {
       user = await authModelSchema.findOne({role, email });

      if (!user) {
        // Handle the case when the email does not exist in the database
        return res.status(404).json({ message: 'your credentials is not found ! Please check your email or role' });
      }
      
      const checkvarification =  checkStatus(user);
      if(checkvarification.status){
      const resetToken = generateResetToken();
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 24 * 60 * 60 * 1000; // 1 day; 
      }else{
        return res.status(422).json({
          status: false,
          message: checkvarification.message,
        });
      }
    }

    if (role === 'visitor') {
       user = await authModelSchema.findOne({role, email });

      if (!user) {
        // Handle the case when the email does not exist in the database
        return res.status(409).json({ message: 'your credentials is not found ! Please check your email or role' });
      }
      
      const checkvarification =  checkStatus(user);
      if(checkvarification.status){
      const resetToken = generateResetToken();
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000;
    }else{
      return res.status(422).json({
        status: false,
        message: checkvarification.message,
      });
    }
    }

    if (role === 'admin') {
      user = await authModelSchema.findOne({role, email });

      if (!user) {
        // Handle the case when the email does not exist in the database
        return res.status(409).json({ message: 'your credentials is not found ! Please check your email or role' });
      }
      const resetToken = generateResetToken();
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 3600000;
    }

    const saveData = await user.save();

    if (saveData) {
      const emailresponse = await emailService(saveData, false);

      sgMail.setApiKey(process.env.SENDGRID_KEY);
      sgMail.send(emailresponse)
        .then((response) => {
          console.log(response);
          res.json({ status: 200, message: 'Password reset email sent' });
        })
        .catch((error) => {
          res.json({ status: 409, message: 'Email not Send please Try Again' });
        });
    } else {
      res.status(409).json({ status: 409, message: 'Internal server error' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
};

/*  Reset password   */
const resetPassword = async (req, res) => {

  const { new_password, confirm_password, role, id, token } = req.body;
  try {

    if (!new_password || !confirm_password || !id || !token) {
      return res.json({
        status: 409,
        message: "All Field are required",
      });
    }

    if (new_password != confirm_password) {
      return res.status(409).json({
        message: message.PASSWORD_CHECKED,
      });
    }
    // Check if the user with the provided resetToken and resetTokenExpiration exists
    const user = await authModelSchema.findOne({_id:id,resetToken:token,resetTokenExpiration: { $gt: Date.now() }})

      console.log(user);
    if (!user) {
      return res.status(409).json({ status: 409, message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    const saveData = await user.save();
    if (role === saveData.role) {
      res.json({ status: 200, message: 'Password reset', role: saveData.role });
    } else {
      res.status(409).json({ status: 409, message: 'You Password is not Change Please Try Again ' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }

}

/*  subscribe */
// const subscribe = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const schema = await Joi.object({
//       email: Joi.string().email().required().messages({
//         "string.empty": `Please enter your email address.`,
//         "string.email": `please enter valid email address.`
//       }),
//     });
//     const validation = schema.validate({
//       email: email,
//     });

//     if (validation.error) {
//       return res.status(405).send({
//         status: 405,
//         message:validation.error.details[0].message,
//       });
//     }
//     const subscribe = await subscribeModel({ email })

//     const result = await subscribe.save()
//     if (result) {
//       const emailresponse = await emailService(result, 'subscribe');

//       sgMail.setApiKey(process.env.SENDGRID_KEY);
//       sgMail.send(emailresponse)
//         .then((response) => {
//           console.log(response);
//           res.json({ status: 200, message: 'successfully subscribe' });
//         })
//         .catch((error) => {
//           res.json({ status: 409, message: 'Email not Send please Try Again' });
//         });
//     } else {
//       return res.status(409).json({
//         status: 409,
//         message: message.ERROR_MESSAGE,
//       });
//     }

//   } catch (error) {
//     return res.status(500).json({
//       status: 500,
//       message: message.ERROR_MESSAGE,
//     });
//   }
// }


module.exports = {
  createRegisterAuth,
  verifyOTP,
  resetOTP,
  authLogin,
  forgotPassword,
  resetPassword,
//   subscribe,
}

