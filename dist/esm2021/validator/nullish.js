import { Validator } from '.';
/**
 * Validator for nullish values (null or undefined)
 *
 * @since 1.0.0
 * @export
 * @class NullishValidator
 * @extends {(Validator<null | undefined>)}
 * @implements {NullishValidatable}
 */
export class NullishValidator extends Validator {
    validateBaseType(value_) {
        if (value_ !== null && value_ !== undefined) {
            this.throwValidationError('value is not nullish');
        }
        return value_;
    }
}
