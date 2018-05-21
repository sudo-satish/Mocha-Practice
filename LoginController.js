var LoginController = function() {
    var ageValidater = require('./_helper/validator');

    if(ageValidater(80)) {
        console.log('You are allowed to login.');
    } else {
        console.log('you are not allowed to login.');
    }
}

new LoginController();