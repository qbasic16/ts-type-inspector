import type { ArrayItem } from 'ts-lib-extended';
import { Validator } from '.';
import type { ArrayItemValidator, Validatable } from '../types';
export declare type ArrayValidatable<Out extends Array<any>, V extends ArrayItemValidator = ArrayItemValidator<Out>> = Validatable<Out> & {
    /**
     * validate exact array length
     *
     * @since 1.0.0
     */
    length(length_: number): ArrayValidatable<Out, V>;
    /**
     * validate minimum array length
     *
     * @since 1.0.0
     */
    min(min_: number): ArrayValidatable<Out, V>;
    /**
     * validate maximum array length
     *
     * @since 1.0.0
     */
    max(max_: number): ArrayValidatable<Out, V>;
    /**
     * define accepted values
     *
     * @since 1.0.0
     */
    accept(...items_: ReadonlyArray<ArrayItem<Out>>): ArrayValidatable<Out, V>;
    /**
     * define rejected values
     *
     * @since 1.0.0
     */
    reject(...items_: ReadonlyArray<ArrayItem<Out>>): ArrayValidatable<Out, V>;
};
/**
 * Validator for array values
 *
 * @since 1.0.0
 * @export
 * @class ArrayValidator
 * @extends {Validator<Out>}
 * @implements {ArrayValidatable<Out, V>}
 * @template Out
 * @template V
 */
export declare class ArrayValidator<Out extends Array<any>, V extends ArrayItemValidator = ArrayItemValidator<Out>> extends Validator<Out> implements ArrayValidatable<Out, V> {
    private readonly _itemValidator;
    constructor(_itemValidator: V);
    length(length_: number): ArrayValidatable<Out, V>;
    min(min_: number): ArrayValidatable<Out, V>;
    max(max_: number): ArrayValidatable<Out, V>;
    accept(...items_: ReadonlyArray<ArrayItem<Out>>): ArrayValidatable<Out, V>;
    reject(...items_: ReadonlyArray<ArrayItem<Out>>): ArrayValidatable<Out, V>;
    protected validateBaseType(value_: unknown): Out;
    private checkLength;
    private checkMin;
    private checkMax;
    private checkAccepted;
    private checkRejected;
}
//# sourceMappingURL=array.d.ts.map