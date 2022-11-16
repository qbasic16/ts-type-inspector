import { Validator } from '.';
import type { Validatable } from '../types';
export declare type UndefinedValidatable = Validatable<undefined>;
/**
 * Validator for undefined values
 *
 * @since 1.0.0
 * @export
 * @class UndefinedValidator
 * @extends {Validator<undefined>}
 * @implements {UndefinedValidatable}
 */
export declare class UndefinedValidator extends Validator<undefined> implements UndefinedValidatable {
    protected validateBaseType(value_: unknown): undefined;
}
//# sourceMappingURL=undefined.d.ts.map