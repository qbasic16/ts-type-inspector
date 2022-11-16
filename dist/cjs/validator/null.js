"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullValidator = void 0;
const _1 = require(".");
/**
 * Validator for null values
 *
 * @since 1.0.0
 * @export
 * @class NullValidator
 * @extends {Validator<null>}
 * @implements {NullValidatable}
 */
class NullValidator extends _1.Validator {
    validateBaseType(value_) {
        if (value_ !== null) {
            this.throwValidationError('value is not null');
        }
        return value_;
    }
}
exports.NullValidator = NullValidator;
