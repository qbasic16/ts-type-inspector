"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullishValidator = void 0;
const _1 = require(".");
/**
 * Validator for nullish values (null or undefined)
 *
 * @since 1.0.0
 * @export
 * @class NullishValidator
 * @extends {(Validator<null | undefined>)}
 * @implements {NullishValidatable}
 */
class NullishValidator extends _1.Validator {
    validateBaseType(value_) {
        if (value_ !== null && value_ !== undefined) {
            this.throwValidationError('value is not nullish');
        }
        return value_;
    }
}
exports.NullishValidator = NullishValidator;
