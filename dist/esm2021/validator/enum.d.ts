import type { Enumerable, EnumerableBase, EnumerableValue } from 'ts-lib-extended';
import { Validator } from '.';
import type { Validatable } from '../types';
export declare type EnumValidatable<E extends Enumerable<unknown>> = Validatable<EnumerableValue<E>> & {
    /**
     * additional base type validation for enum values
     *
     * @since 1.0.2
     */
    values(validator_: Validatable<EnumerableBase<EnumerableValue<E>>>): EnumValidatable<E>;
};
/**
 * Validator for enum values
 *
 * @since 1.0.2
 * @export
 * @class EnumValidator
 * @extends {Validator<EnumerableValue<E>>}
 * @implements {EnumValidatable<E>}
 * @template E
 */
export declare class EnumValidator<E extends Enumerable<unknown>> extends Validator<EnumerableValue<E>> implements EnumValidatable<E> {
    private readonly _enum;
    constructor(_enum: E);
    values(validator_: Validatable<EnumerableBase<EnumerableValue<E>>>): EnumValidatable<E>;
    protected validateBaseType(value_: unknown): EnumerableValue<E>;
    private isEnumValue;
    private checkValues;
}
//# sourceMappingURL=enum.d.ts.map