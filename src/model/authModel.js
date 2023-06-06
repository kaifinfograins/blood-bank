const mongoose = require("mongoose");
const { Schema } = mongoose;

const authModelSchema = new mongoose.Schema({
   
    
    first_Name: {
        type: Schema.Types.String,
    },
    last_Name: {
        type: Schema.Types.String,
    },
    email: {
        type: Schema.Types.String,
    },
    password: {
        type: Schema.Types.String,
    },
    otp: {
        type: Schema.Types.Number,
    },
    role: {
        type: Schema.Types.String,
        enum: ["visitor", "doner","admin"],
    },
    is_varified: {
        type: Number,
        default: 0,  // 0 block ,1 Unblock 
        required:true
    },
    createdAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    updateAt: {
        type: Schema.Types.Date,
        default: Date.now,
    },
    image: { 
        type: Schema.Types.String 
    },
    phoneNumber:{
        type: Schema.Types.String,
    },
    resetToken:{
        type: Schema.Types.String,
    } ,
    resetTokenExpiration: {
        type: Schema.Types.Date,    
    }

})
const authModel = mongoose.model("auth", authModelSchema);
module.exports = authModel