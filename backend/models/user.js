const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String,required: true, minlength:6},
    createdAt:{type: Date,default: Date.now()}
});

userSchema.pre('save', async function () {
  if (!this.isModified('password')) ;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare
    (enterPassword, this.password);
}

module.exports = mongoose.model("User",userSchema);