import request from '../config/superagent';
import endpoints from '../config/endpoints';

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
                return res.body;
            });
    },
}

export default userServices;
