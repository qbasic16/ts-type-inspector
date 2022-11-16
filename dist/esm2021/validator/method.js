import { Validator } from '.';
/**
 * Validator for method-like values.
 * Unfortunately (for technical reasons), this validator can only validate the number of parameters.
 *
 * @since 1.0.0
 * @export
 * @class MethodValidator
 * @extends {Validator<Out>}
 * @implements {MethodValidatable<Out>}
 * @template Out
 */
export class MethodValidator extends Validator {
    count(count_) {
        return this.setupCondition(value_ => this.checkCount(value_, count_));
    }
    min(min_) {
        return this.setupCondition(value_ => this.checkMin(value_, min_));
    }
    max(max_) {
        return this.setupCondition(value_ => this.checkMax(value_, max_));
    }
    validateBaseType(value_) {
        if (typeof value_ !== 'function') {
            this.throwValidationError('value is not a method');
        }
        return value_;
    }
    checkCount(value_, count_) {
        if (count_ !== value_.length) {
            this.throwValidationError('incorrect params count');
        }
    }
    checkMin(value_, min_) {
        if (value_.length < min_) {
            this.throwValidationError('too few parameters');
        }
    }
    checkMax(value_, max_) {
        if (value_.length > max_) {
            this.throwValidationError('too many parameters');
        }
    }
}
