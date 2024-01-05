import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  mobileNumber: { type: String, unique: true, required: true },
  otp: {type: String,required: true}, 
  otpTimestamp: Date, 
},{timestamps:true});

export default mongoose.models.User || mongoose.model('User', userSchema);
