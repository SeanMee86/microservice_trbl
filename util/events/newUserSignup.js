const { iterableUrl } = require('../../config/keys');
const emailValidation = require('../validateEmail');

module.exports = function(req, res, axios) {
    const email = req.body.email;
    const {hasErrors, message} = emailValidation(email);
    if(hasErrors) {
        res.send(message);
    }else{
        const event_data = {
            "email": email,
            "eventName": "newUserSignup",
            "dataFields": {
                "signupSource": req.body.signUpSource ? req.body.signUpSource : "Unknown Signup Source"
            }
        };
        axios.post(iterableUrl+'events/track', event_data)
            .then(response => {
                res.send(response.data)
            }).catch(err => {
            res.send(err)
        })
    }
}