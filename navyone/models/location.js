import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  // Possibly include geographic coordinates or other relevant data
  coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }, // [longitude, latitude]
  },
  // Additional location-specific fields can be added here
}, { timestamps: true });

locationSchema.index({ coordinates: '2dsphere' });

const Location = mongoose.models.Location || mongoose.model('Location', locationSchema);

export default Location;
