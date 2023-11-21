import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  mobileNumber: { type: String, unique: true, required: true },
  otp: String, 
  otpTimestamp: Date, 
  // ... other fields ...
});

export default mongoose.models.User || mongoose.model('User', userSchema);
