var validateAge = function(age) {

    var thresholdAge = 50;

    if(age < thresholdAge) {
        return true;
    } else {
        return false;
    }
}

module.exports = validateAge;