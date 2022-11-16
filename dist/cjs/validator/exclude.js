"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcludeValidator = void 0;
const _1 = require(".");
/**
 * This validator is able to validate if a type doesn't exist in a KNOWN union type.
 * The generics "Out" and "In" have to be set. "In" describes the incoming union type and "Out" the desired output type.
 * The passed validator checks whether the undesired types (= In - Out) exist in the value.
 *
 * @since 1.1.0
 * @export
 * @class ExcludeValidator
 * @extends {Validator<Out, In>}
 * @implements {ExcludeValidatable<Out, In>}
 * @template Out
 * @template In
 */
class ExcludeValidator extends _1.Validator {
    constructor(_validator // use Validator class and NOT Validatable type to prevent the use of conditions
    ) {
        super();
        Object.defineProperty(this, "_validator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _validator
        });
    }
    validateBaseType(value_) {
        if (this._validator.isValid(value_)) {
            this.throwValidationError('value is excluded');
        }
        return value_;
    }
}
exports.ExcludeValidator = ExcludeValidator;
