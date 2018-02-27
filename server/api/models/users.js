'use strict';
/**
 * Defining a User Model in mongoose
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const uuidv4 = require('uuid/v4');
const moment = require('moment');
const config = require('../config/secrets');
/*
 * Embedded User Authentication Schema
 */
const AuthSchema = new mongoose.Schema({
    password: {
      type: String,
      default: null,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
        created: {
          type: Date,
          required: true,
        },
        expires: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    _id: false,
  });
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
    authentication: {
      type: AuthSchema,
      required: true,
      select: false,
    },
  },
  {
    collection: 'users',
  }
);

/**
 * Password hash middleware.
 */
// UserSchema.pre('save', function save(next) {
//   var user = this;
//   if (!user.isModified('authentication.password')) return next();
//   bcrypt.genSalt(5, (err, salt) => {
//     if (err) return next(err);
//     bcrypt.hash(user.authentication.password, salt, null, (hashErr, hash) => {
//       if (hashErr) return next(hashErr);
//       user.authentication.password = hash;
//       next();
//     });
//   });
// });

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Compare Password provided to the one the user has stored.
   *
   * @param {String} candidatePassword
   * @return {Promise} bcrypt.compare
   */
  comparePassword(candidatePassword) {
    const password = _.get(this.authentication, 'password');
    return bcrypt.compare(candidatePassword, password);
  },
  /**
   * Return tokens that have not yet expired (are still valid for at least one more day).
   * @return {Array} Valid tokens
   */
  getValidTokens() {
    if (!this.authentication || !this.authentication.tokens || this.authentication.tokens.length === 0) {
      return [];
    }
    return this.authentication.tokens.filter(token => moment(token.expires).isAfter(moment().add(1, 'day')));
  },
  /**
   * Return long-lived refresh token that expires in 7 days.
   *
   * @return {Object} with the following format:
   * {token: 'unique id', created: Date, expires: Date }
   */
  generateRefreshToken() {
    return {
      token: uuidv4(),
      created: new Date(),
      expires: moment()
        .add(7, 'days')
        .toDate(),
    };
  },
  /**
   * Encode refresh token to JWT.
   *
   * @param {String} token = The unique token id
   * @param {Date} expirationDate = The token expiration date.
   * @return {String} JWT
   */
  generateRefreshJWT(token, expirationDate) {
    if (isNaN(Date.parse(expirationDate))) {
      return null;
    }
    const payload = {
      sub: token,
      iss: config.jwtIssuer,
      aud: config.jwtAudience,
      exp: moment(expirationDate).unix(),
    };
    return jwt.sign(payload, config.jwtSecret);
  },
  /**
   * Generate a short-lived access token (JWT) that expires in 1 hour.
   *
   * @return {String} JWT
   */
  generateAccessJWT() {
    return jwt.sign(
      {
        sub: this.id,
        iss: config.jwtIssuer,
        aud: config.jwtAudience,
        // @todo Use 'exp' instead of 'expiresIn' to set a correct expiration time.
        // exp: moment().unix(),
        expiresIn: '1 hour',
        jti: uuidv4(), // unique identifier for the token
      },
      config.jwtSecret
    );
  },
  /**
   * Add token in the authentication tokens array and save user.
   *
   * @param {Object} Token with the following format:
   * {token: 'unique id', created: Date, expires: Date }
   * @return {Promise}
   */
  addToken(token) {
    this.authentication.tokens.push(token);
    return this.save();
  },
  /**
  * Check if user is admin
  */
  isAdmin() {
    return this.admin;
  },
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
    return this.findOne({ email }).select('+authentication');
  },
  /**
   * Finds a User by authenticatipn / refresh token.
   * Returns user only if the token has not expired.
   *
   * @param  {String} tokenId = The token
   * @return {Promise} Returns a promise that resolves upon completion of the request
   */
  findUserByToken(tokenId) {
    return this.findOne().elemMatch('authentication.tokens', {
      token: tokenId,
      expires: {
        $gte: new Date(),
      },
    });
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
