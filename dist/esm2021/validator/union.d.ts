import type { UnitedValidators, UnitedValidatorsItem, Validatable } from '../types';
import { Validator } from './index';
export declare type UnionValidatable<Out extends UnitedValidatorsItem<U>, U extends UnitedValidators = UnitedValidators<Out>> = Validatable<Out>;
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
export declare class UnionValidator<Out extends UnitedValidatorsItem<U>, U extends UnitedValidators = UnitedValidators<Out>> extends Validator<Out> implements UnionValidatable<Out, U> {
    private _validators;
    constructor(...validators_: U);
    protected validateBaseType(value_: unknown): Out;
}
//# sourceMappingURL=union.d.ts.map