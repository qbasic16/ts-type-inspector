import { Validator } from '.';
import type { Validatable } from '../types';
export declare type ExcludeValidatable<Out extends In, In> = Validatable<Out, In>;
/**
 * This validator is able to validate if a type doesn't exist in a KNOWN union type.
 * The generics "Out" and "In" have to be set. "In" describes the incoming union type and "Out" the desired output type.
 * The passed validator checks whether the undesired types (= In - Out) exist in the value.
 *
 * @since 1.1.0
 * @export
 * @class ExcludeValidator
 * @extends {Validator<Out, In>}
 * @implements {ExcludeValidatable<Out, In>}
 * @template Out
 * @template In
 */
export declare class ExcludeValidator<Out extends In, In> extends Validator<Out, In> implements ExcludeValidatable<Out, In> {
    private readonly _validator;
    constructor(_validator: Validator<Exclude<In, Out>>);
    protected validateBaseType(value_: In): Out;
}
//# sourceMappingURL=exclude.d.ts.map