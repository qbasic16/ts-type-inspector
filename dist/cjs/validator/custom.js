"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidator = void 0;
const _1 = require(".");
/**
 * Validator for custom value validation.
 *
 * @since 1.0.0
 * @export
 * @class CustomValidator
 * @extends {Validator<Out>}
 * @implements {CustomValidatable<Out>}
 * @template Out
 */
class CustomValidator extends _1.Validator {
    /**
     * @param {CustomValidation<Out>} _validationCallback Return an error message if validation fails; else undefined
     * @memberof CustomValidator
     */
    constructor(_validationCallback) {
        super();
        Object.defineProperty(this, "_validationCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _validationCallback
        });
    }
    validateBaseType(value_) {
        const result = this._validationCallback(value_);
        if (result !== undefined) {
            this.throwValidationError(result);
        }
        return value_;
    }
}
exports.CustomValidator = CustomValidator;
