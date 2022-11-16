import type { Dictionary, DictionaryKey, DictionaryValue } from 'ts-lib-extended';
import { Validator } from '.';
import type { Validatable } from '../types';
export declare type DictionaryValidatable<Out extends Dictionary> = Validatable<Out> & {
    /**
     * additional dictionary key validation
     *
     * @since 1.0.0
     */
    keys(validator_: Validatable<DictionaryKey<Out>>): DictionaryValidatable<Out>;
};
/**
 * Validator for dictionary objects
 *
 * @since 1.0.0
 * @export
 * @class DictionaryValidator
 * @extends {Validator<Out>}
 * @implements {DictionaryValidatable<Out>}
 * @template Out
 */
export declare class DictionaryValidator<Out extends Dictionary> extends Validator<Out> implements DictionaryValidatable<Out> {
    private readonly _itemValidator;
    constructor(_itemValidator: Validatable<DictionaryValue<Out>>);
    keys(validator_: Validatable<DictionaryKey<Out>>): DictionaryValidatable<Out>;
    protected validateBaseType(value_: unknown): Out;
    private isDictionary;
    private checkKeys;
}
//# sourceMappingURL=dictionary.d.ts.map