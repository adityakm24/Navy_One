const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      default: "defaultPassword", // Set a default password
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    mustVerify: {
      type: Boolean,
      default: true,
    },
    mustChangePassword: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Pre-save hook to hash password before saving
adminSchema.pre("save", function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  // Generate a salt and use it to hash the password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      // Replace the password with the hash
      this.password = hash;
      next();
    });
  });
});

// Method to check the entered password against the hashed password stored
adminSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// Method to update username and password
adminSchema.methods.updateCredentials = function (
  newUsername,
  newPassword,
  callback
) {
  // Update username if provided
  if (newUsername) {
    this.username = newUsername;
  }

  // Update password if provided
  if (newPassword) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return callback(err);

      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) return callback(err);
        // Replace the password with the new hash
        this.password = hash;
        callback(null, "Credentials updated successfully");
      });
    });
  } else {
    // If no new password, just save the updated username
    this.save((err) => {
      if (err) return callback(err);
      callback(null, "Username updated successfully");
    });
  }
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
