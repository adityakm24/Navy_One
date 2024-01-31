import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: {type:String,required:true},
  description: String,
  photo: String,
  location: String,
  department_name: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  department_id: {type:mongoose.Schema.Types.ObjectId, ref:'Department'},
  status: String,
  remarks: String,
}, { timestamps: true });

const Complaints = mongoose.models.Complaints || mongoose.model('Complaint', complaintSchema);

export default Complaints;
