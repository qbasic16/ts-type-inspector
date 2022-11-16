import type { ArrayItem, MinArray } from 'ts-lib-extended';
import type { ValidationError } from './error';
export declare type MethodLike = (...args_: any[]) => any;
export declare type ObjectLike = Record<PropertyKey, any>;
export declare type AnyLike = number | string | boolean | ObjectLike | MethodLike | undefined | symbol | null;
export declare type CustomValidation<V> = (value_: V) => string | undefined;
export interface Validatable<Out extends In, In = unknown> {
    readonly validationError: ValidationError | undefined;
    custom(validation_: CustomValidation<Out>): this;
    error(message_: string | (() => string)): this;
    validate(value_: In): Out;
    isValid(value_: In): value_ is Out;
}
export declare type PropertyValidators<V extends ObjectLike> = {
    readonly [key in keyof V]-?: Validatable<V[key]>;
};
export declare type UnitedValidators<V = any> = MinArray<Validatable<V>, 2>;
export declare type UnitedValidatorsItem<U extends MinArray<Validatable<any>, 2>> = ArrayItem<U> extends Validatable<infer V> ? V : never;
export declare type StrictValues<V extends AnyLike = AnyLike> = ReadonlyArray<V>;
export declare type StrictValuesItem<S extends StrictValues> = ArrayItem<S>;
export declare type ArrayItemValidator<A extends Array<any> = Array<any>> = Validatable<ArrayItem<A>>;
/**
 * @deprecated Remove in next release
 */
export declare type ArrayItemValidatorArray<A extends Validatable<any>> = A extends Validatable<infer V> ? V[] : never;
export declare type ValidationCondition<V> = (value_: V) => void | never;
export declare type DateLike = string | number | Date;
//# sourceMappingURL=types.d.ts.map