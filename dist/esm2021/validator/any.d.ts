import { Validator } from '.';
import type { Validatable } from '../types';
export declare type AnyValidatable = Validatable<any> & {
    /**
     * reject nullish values (undefined, null)
     *
     * @since 1.0.0
     */
    get notNullish(): AnyValidatable;
    /**
     * reject falsy values (undefined, null, 0, false, '', NaN, 0n, ...)
     *
     * @since 1.0.0
     */
    get notFalsy(): AnyValidatable;
};
/**
 * This validator should only be used when a value is indeterminate or when you want to bypass deep validation of an object
 *
 * @since 1.0.0
 * @export
 * @class AnyValidator
 * @extends {Validator<any>}
 * @implements {AnyValidatable}
 */
export declare class AnyValidator extends Validator<any> implements AnyValidatable {
    get notNullish(): AnyValidatable;
    get notFalsy(): AnyValidatable;
    protected validateBaseType(value_: unknown): any;
    private checkNullish;
    private checkFalsy;
}
//# sourceMappingURL=any.d.ts.map