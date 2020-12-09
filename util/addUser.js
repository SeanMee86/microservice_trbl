const { iterableUrl } = require('../config/keys');
const getUsers = require('./getUsers');
const emailValidation = require('../util/validateEmail');

module.exports = function(req, res, axios) {
    const email = req.body.email;
    const {hasErrors, message} = emailValidation(email);

    if(hasErrors) {
        res.send(message)
    } else {
        getUsers(req, res, axios)
            .then(users => {
                if (!users.includes(email)) {
                    const iterable_request = {
                        "listId": +req.params.listId,
                        "subscribers": [
                            {
                                "email": email,
                                "dataFields": {},
                                "userId": "string",
                                "preferUserId": true,
                                "mergeNestedObjects": true
                            }
                        ]
                    }
                    axios.post(iterableUrl + 'lists/subscribe', iterable_request)
                        .then(response => {
                            res.send(response.data);
                        }).catch(err => {
                        res.send(err)
                    })
                } else {
                    res.send("User already exists");
                }
            })
    }
}