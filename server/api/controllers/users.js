'use strict';
const User = require('../models/users');
const HTTPStatus = require('http-status');

module.exports = {
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
            authentication: {
                password: newUserObj.password,
                tokens: [{
                    token: 'placeholder',
                    created: new Date(),
                    expires: new Date()
                }]
            }
        };

        User.createUser(newUser)
            .then((createdUser) => {
                // Catch Error
                if (!createdUser) {
                    return res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({status: 0, error: "Error creating user"});
                }

                // Return Success
                return res.json({
                    status: 1,
                    createdUser: createdUser
                });
            });
    }
}
