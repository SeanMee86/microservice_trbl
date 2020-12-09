const { iterableUrl } = require('../../config/keys');

module.exports = function(req, res, axios) {
    const event_data = {
        "email": req.body.email,
        "eventName": "newUserSignup",
        "dataFields": {
            "signupSource": "ProWeb LP"
        }
    };
    axios.post(iterableUrl+'events/track', event_data)
        .then(response => {
            res.send(response.data)
        }).catch(err => {
            res.send(err)
        })
}