import { Validator } from '.';
/**
 * Validator for precisely defined values (not just of specific type)
 * Keep in mind that object are compaired by reference (equality)
 *
 * @since 1.0.0
 * @export
 * @class StrictValidator
 * @extends {Validator<Out>}
 * @template Out
 * @template S
 */
export class StrictValidator extends Validator {
    constructor(...strictValues_) {
        super();
        Object.defineProperty(this, "_strictValues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._strictValues = strictValues_;
    }
    validateBaseType(value_) {
        if (!this._strictValues.includes(value_)) {
            this.throwValidationError('no equality found');
        }
        return value_;
    }
}
