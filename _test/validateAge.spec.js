var assert = require('assert');
var expect = require('expect.js');

describe('Validate Age', function () {
    describe('validateAge', function () {
        it('should return true when age is < 50', function () {
            var validateAge = require('../_helper/validator');
            var isValid = validateAge(49);

            expect(isValid).to.be.ok();
        });
        it('should return false when age is not < 50', function () {
            var validateAge = require('../_helper/validator');
            var isValid = validateAge(50);

            expect(isValid).not.to.be.ok();
        });
    });
});