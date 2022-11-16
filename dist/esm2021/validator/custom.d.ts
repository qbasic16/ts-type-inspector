import { Validator } from '.';
import type { CustomValidation, Validatable } from '../types';
export declare type CustomValidatable<Out> = Validatable<Out>;
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
export declare class CustomValidator<Out> extends Validator<Out> implements CustomValidatable<Out> {
    private readonly _validationCallback;
    /**
     * @param {CustomValidation<Out>} _validationCallback Return an error message if validation fails; else undefined
     * @memberof CustomValidator
     */
    constructor(_validationCallback: CustomValidation<unknown>);
    protected validateBaseType(value_: unknown): Out;
}
//# sourceMappingURL=custom.d.ts.map