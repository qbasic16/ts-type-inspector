import { Validator } from './index';
/**
 * Validator for union type values (like "string | number")
 *
 * @since 1.0.0
 * @export
 * @class UnionValidator
 * @extends {Validator<Out>}
 * @implements {UnionValidatable<Out, U>}
 * @template Out
 * @template U
 */
export class UnionValidator extends Validator {
    constructor(...validators_) {
        super();
        Object.defineProperty(this, "_validators", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._validators = validators_;
    }
    validateBaseType(value_) {
        const errors = [];
        for (let i = 0; i < this._validators.length; i++) {
            const validator = this._validators[i];
            try {
                validator.validate(value_);
                break;
            }
            catch (reason_) {
                errors.push(this.detectError(reason_));
            }
        }
        if (errors.length === this._validators.length) {
            this.throwValidationError('value does not match any of the possible types', undefined, errors);
        }
        return value_;
    }
}
