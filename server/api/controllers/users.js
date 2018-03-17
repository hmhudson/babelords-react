'use strict';
const User = require('../models/users');
const HTTPStatus = require('http-status');

module.exports = {
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findUserByEmail(email)
        .then((existingUser) => {
            if(!existingUser){
                return res.json({
                    status: 0,
                    err: "Your login details could not be verified. Please try again."
                });
            }

            existingUser.comparePassword(password, (err, match) => {
                if (err) {
                    return res.json({
                        status: 0,
                        err: "Your login details could not be verified. Please try again."
                    });
                }

                // Generate new JWT
                const newToken = existingUser.generateToken();

                const userReturnObj = {
                    email: existingUser.email,
                    id: existingUser._id,
                    profile: existingUser.profile
                };

                return res.json({
                    status: 1,
                    token: `JWT ${newToken}`,
                    user: userReturnObj
                });
            });
        });
    },

    createUser(req, res) {
        // Transform user object
        const newUserObj = req.body;

        const newUser = {
            email: newUserObj.email,
            profile: {
                firstName: newUserObj.firstName,
                lastName: newUserObj.lastName
            },
            lastLogin: new Date(),
            password: newUserObj.password,
        };

        User.findUserByEmail(newUser.email)
        .then((existingUser) => {
            if(existingUser){
                return res.json({
                    status: 0,
                    err: "This email is already linked to an account."
                });
            }

            User.createUser(newUser)
            .then((createdUser) => {
                const userReturnObj = {
                    email: createdUser.email,
                    id: createdUser._id,
                    profile: createdUser.profile
                };

                // Generate new JWT
                const newToken = createdUser.generateToken();

                return res.json({
                    status: 1,
                    token: `JWT ${newToken}`,
                    user: userReturnObj
                });
            });
        });
    }
}
