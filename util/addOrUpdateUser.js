const {iterableUrl} = require('../config/keys');
const getUser = require('../util/getUser');

module.exports = function(req, res, axios){
    getUser(req, res, axios)
        .then(user => {
            if(typeof user === 'string'){
                res.send(user)
            } else {
                const { userNotFound } = user;
                let emailListIds;
                if(userNotFound) {
                    emailListIds = [];
                } else {
                    emailListIds = user.dataFields.emailListIds;
                }
                if(!emailListIds.includes(797785))
                    emailListIds.push(797785);
                const user_data = {
                    email: req.body.email,
                    dataFields: {
                        signupSource: 'NewSite Form',
                        emailListIds
                    }
                }
                axios.post(iterableUrl+'users/update', user_data)
                    .then(response => {
                        res.send(response.data)
                    })
            }
        })
}
