"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanValidator = void 0;
const _1 = require(".");
/**
 * Validator for boolean values
 *
 * @since 1.0.0
 * @export
 * @class BooleanValidator
 * @extends {Validator<boolean>}
 * @implements {BooleanValidatable}
 */
class BooleanValidator extends _1.Validator {
    get true() {
        return this.setupCondition(value_ => this.checkTrue(value_));
    }
    get false() {
        return this.setupCondition(value_ => this.checkFalse(value_));
    }
    validateBaseType(value_) {
        if (typeof value_ !== 'boolean') {
            this.throwValidationError('value is not a boolean');
        }
        return value_;
    }
    checkTrue(value_) {
        if (!value_) {
            this.throwValidationError('boolean is false');
        }
    }
    checkFalse(value_) {
        if (value_) {
            this.throwValidationError('boolean is true');
        }
    }
}
exports.BooleanValidator = BooleanValidator;
