import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  department_name: { type: String, required: true, unique: true },
  description: String,
  department_head: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  department_id : {type: String,required:true,unique:true},
  email: {type:String}
}, { timestamps: true });

export default mongoose.models.Department || mongoose.model('Department', departmentSchema);

