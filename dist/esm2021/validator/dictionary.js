import { Validator } from '.';
/**
 * Validator for dictionary objects
 *
 * @since 1.0.0
 * @export
 * @class DictionaryValidator
 * @extends {Validator<Out>}
 * @implements {DictionaryValidatable<Out>}
 * @template Out
 */
export class DictionaryValidator extends Validator {
    constructor(_itemValidator) {
        super();
        Object.defineProperty(this, "_itemValidator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _itemValidator
        });
    }
    keys(validator_) {
        return this.setupCondition(value_ => this.checkKeys(value_, validator_));
    }
    validateBaseType(value_) {
        if (!this.isDictionary(value_)) {
            this.throwValidationError('value is not a dictionary');
        }
        for (const dictionaryKey in value_) {
            try {
                this._itemValidator.validate(value_[dictionaryKey]);
            }
            catch (reason_) {
                this.rethrowError(reason_, dictionaryKey);
            }
        }
        return value_;
    }
    isDictionary(value_) {
        // TODO: is there any validatable differnce between dictionary and standard object?
        return typeof value_ === 'object' && value_ !== null;
    }
    checkKeys(value_, keyValidator_) {
        for (const dictionaryKey in value_) {
            try {
                keyValidator_.validate(dictionaryKey);
            }
            catch (reason_) {
                this.rethrowError(reason_, dictionaryKey);
            }
        }
    }
}
