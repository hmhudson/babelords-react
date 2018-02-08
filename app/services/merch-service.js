import request from '../config/superagent';

let etsyServices = {
    /**
     * queries etsy api for store info
     */
    getStore() {
        request
            .get("https://openapi.etsy.com/v2/shops/15894805?api_key=r5ezor9ikhwl9m8l36ade82n")
            .end()
            .then((res) => {
                console.log(res.body);
                return res.body;
            });
    },
}

export default etsyServices;
