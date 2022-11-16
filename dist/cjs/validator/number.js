"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidator = void 0;
const _1 = require(".");
/**
 * Validator for numeric values
 *
 * @since 1.0.0
 * @export
 * @class NumberValidator
 * @extends {RangeValidator<number>}
 * @implements {NumberValidatorInterface}
 */
class NumberValidator extends _1.Validator {
    get positive() {
        return this.setupCondition(value_ => this.checkPositive(value_));
    }
    get negative() {
        return this.setupCondition(value_ => this.checkNegative(value_));
    }
    get finite() {
        return this.setupCondition(value_ => this.checkFinite(value_));
    }
    get rejectNaN() {
        return this.setupCondition(value_ => this.checkNaN(value_));
    }
    get rejectInfinity() {
        return this.setupCondition(value_ => this.checkInfinity(value_));
    }
    get rejectZero() {
        return this.setupCondition(value_ => this.checkZero(value_));
    }
    min(min_) {
        return this.setupCondition(value_ => this.checkMin(value_, min_));
    }
    max(max_) {
        return this.setupCondition(value_ => this.checkMax(value_, max_));
    }
    accept(...numbers_) {
        return this.setupCondition(value_ => this.checkAccepted(value_, numbers_));
    }
    reject(...numbers_) {
        return this.setupCondition(value_ => this.checkRejected(value_, numbers_));
    }
    validateBaseType(value_) {
        if (typeof value_ !== 'number') {
            this.throwValidationError('value is not a number');
        }
        return value_;
    }
    checkFinite(value_) {
        if (!isFinite(value_)) {
            this.throwValidationError('number is not finite');
        }
    }
    checkNaN(value_) {
        if (isNaN(value_)) {
            this.throwValidationError('number is NaN');
        }
    }
    checkInfinity(value_) {
        if (value_ === Infinity) {
            this.throwValidationError('number is infinite');
        }
    }
    checkZero(value_) {
        if (value_ === 0) {
            this.throwValidationError('number is 0');
        }
    }
    checkMin(value_, min_) {
        if (value_ < min_) {
            this.throwValidationError('number is less than minimum');
        }
    }
    checkMax(value_, max_) {
        if (value_ > max_) {
            this.throwValidationError('number is greater than maximum');
        }
    }
    checkNegative(value_) {
        if (value_ >= 0) {
            this.throwValidationError('number is not negative');
        }
    }
    checkPositive(value_) {
        if (value_ <= 0) {
            this.throwValidationError('number is not positive');
        }
    }
    checkAccepted(value_, accepted_) {
        if (!accepted_.includes(value_)) {
            this.throwValidationError('number is not accepted');
        }
    }
    checkRejected(value_, rejected_) {
        if (rejected_.includes(value_)) {
            this.throwValidationError('number is rejected');
        }
    }
}
exports.NumberValidator = NumberValidator;
