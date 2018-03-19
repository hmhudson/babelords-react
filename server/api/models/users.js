'use strict';
/**
 * Defining a User Model in mongoose
 */
 const jwt= require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const moment = require('moment');
const secrets = require('../config/secrets');

/*
 User Schema
 */
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
        type: String,
        required: true
    },
    profile: {
      firstName: {
        type: String,
        trim: true,
        default: '',
      },
      lastName: {
        type: String,
        trim: true,
        default: '',
      },
    },
    admin: {
      type: Boolean,
      default: false,
    },
    lastLogin: Date,
  },
  {
    collection: 'users',
    timestamps: true
  }
);

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function(next) {
  const user = this,
        SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

/**
 * Methods
 */
UserSchema.methods = {
    comparePassword(candidatePassword, cb) {
      bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return cb(err); }
        cb(null, isMatch);
        });
    },

    generateToken() {
        const userReturnObj = {
            email: this.email,
            id: this._id,
            profile: this.profile,
            admin: this.admin
        };

        return jwt.sign(userReturnObj, secrets.jwtSecret, {
            expiresIn: 604800 //in seconds
        });
    }
};
/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Finds a User by email from within the DB
   *
   * @param  {String} email = User email to search for to be returned
   * @return {Promise} Returns a promise that resolves upon completion of the request
   */
  findUserByEmail(email) {
    return this.findOne({ email });
  },
  /**
   * Creates a new user in the DB
   *
   * @param  {Object} newUser = User to be saved
   * @return {Promise} Returns a promise that resolves upon completion of the request
   */
   createUser(newUser){
       let userObject = new this(newUser);
       return userObject.save();
   }
};

module.exports = mongoose.model('User', UserSchema);
