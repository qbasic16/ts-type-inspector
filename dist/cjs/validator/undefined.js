"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndefinedValidator = void 0;
const _1 = require(".");
/**
 * Validator for undefined values
 *
 * @since 1.0.0
 * @export
 * @class UndefinedValidator
 * @extends {Validator<undefined>}
 * @implements {UndefinedValidatable}
 */
class UndefinedValidator extends _1.Validator {
    validateBaseType(value_) {
        if (value_ !== undefined) {
            this.throwValidationError('value is defined');
        }
        return value_;
    }
}
exports.UndefinedValidator = UndefinedValidator;
