import { Validator } from '.';
/**
 * Validator for null values
 *
 * @since 1.0.0
 * @export
 * @class NullValidator
 * @extends {Validator<null>}
 * @implements {NullValidatable}
 */
export class NullValidator extends Validator {
    validateBaseType(value_) {
        if (value_ !== null) {
            this.throwValidationError('value is not null');
        }
        return value_;
    }
}
