import { Validator } from '.';
/**
 * Validator for optional (maybe undefined) properties/values
 *
 * @since 1.0.0
 * @export
 * @class OptionalValidator
 * @extends {(Validator<undefined | V>)}
 * @implements {OptionalValidatable<V>}
 * @template V
 */
export class OptionalValidator extends Validator {
    constructor(_validator) {
        super();
        Object.defineProperty(this, "_validator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _validator
        });
    }
    validateBaseType(value_) {
        if (typeof value_ === 'undefined') {
            return value_;
        }
        try {
            return this._validator.validate(value_);
        }
        catch (reason_) {
            this.rethrowError(reason_);
        }
    }
}
