import { Validator } from '.';
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
export class ExcludeValidator extends Validator {
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
