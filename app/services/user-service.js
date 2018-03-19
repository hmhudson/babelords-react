import { Cookies } from 'react-cookie';
import request from '../config/superagent';
import endpoints from '../config/endpoints';

const cookie = new Cookies();

let userServices = {
    /**
     * Creates a new user in the db
     * @param {object} newUser - The new user to be saved
     */
    createUser(newUser) {
        return request
            .post(endpoints.createUser)
            .send(newUser)
            .end()
            .then((res) => {
                // Handle error
                if (res.body.status === 0) {
                    return res.body;
                }

                // TODO set cookie expiration date
                // Set the cookie
                cookie.set('token', res.body.token, { path: '/', expires });

                return res.body;

            });
    },

    loginUser(User) {
        return request
        .post(endpoints.loginUser)
        .send(User)
        .end()
        .then((res) => {
            // Handle error
            if (res.body.status === 0) {
                return res.body;
            }

            // Set the cookie
            cookie.set('token', res.body.token, { path: '/' });

            return res.body;
        });
    }
}

export default userServices;
