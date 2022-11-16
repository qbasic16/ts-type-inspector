import { Validator } from '.';
/**
 * Validator for undefined values
 *
 * @since 1.0.0
 * @export
 * @class UndefinedValidator
 * @extends {Validator<undefined>}
 * @implements {UndefinedValidatable}
 */
export class UndefinedValidator extends Validator {
    validateBaseType(value_) {
        if (value_ !== undefined) {
            this.throwValidationError('value is defined');
        }
        return value_;
    }
}
