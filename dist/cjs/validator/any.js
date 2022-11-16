"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnyValidator = void 0;
const _1 = require(".");
/**
 * This validator should only be used when a value is indeterminate or when you want to bypass deep validation of an object
 *
 * @since 1.0.0
 * @export
 * @class AnyValidator
 * @extends {Validator<any>}
 * @implements {AnyValidatable}
 */
class AnyValidator extends _1.Validator {
    get notNullish() {
        return this.setupCondition(value_ => this.checkNullish(value_));
    }
    get notFalsy() {
        return this.setupCondition(value_ => this.checkFalsy(value_));
    }
    validateBaseType(value_) {
        return value_;
    }
    checkNullish(value_) {
        if (value_ === null || value_ === undefined) {
            this.throwValidationError('value is nullish');
        }
    }
    checkFalsy(value_) {
        if (!value_) {
            this.throwValidationError('value is falsy');
        }
    }
}
exports.AnyValidator = AnyValidator;
