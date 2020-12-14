const {iterableUrl} = require('../config/keys');
const emailValidation = require('../util/validateEmail');

module.exports = function(req, res, axios) {
    const { email } = req.body;

    const {hasErrors, message} = emailValidation(email);
    return new Promise(resolve => {
        if(hasErrors)
            resolve(message)
        else
            axios.get(iterableUrl+'/users/'+req.body.email)
                .then(response => {
                    if(response.data.user) {
                        response.data.user.userNotFound = false;
                        resolve(response.data.user);
                    }else{
                        resolve({
                            userNotFound: true,
                            message: 'Creating new user'
                        })
                    }
                }).catch(err => {
                    resolve(err);
                })
    })
}