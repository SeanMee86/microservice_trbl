const validator = require('validator');

module.exports = function(email) {
    const errors = {
        hasErrors: false,
        message: ''
    };

    if(validator.isEmpty(email) && !errors.hasErrors){
        errors.hasErrors = true;
        errors.message = 'Please enter an Email...'
    }

    if(!validator.isEmail(email) && !errors.hasErrors) {
        errors.hasErrors = true;
        errors.message = 'Please enter a valid Email...'
    }

    return errors;
}