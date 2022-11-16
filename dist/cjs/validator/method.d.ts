import { Validator } from '.';
import type { MethodLike, Validatable } from '../types';
export declare type MethodValidatable<Out extends MethodLike> = Validatable<Out> & {
    /**
     * validate exact params count
     *
     * @since 1.0.0
     */
    count(count_: number): MethodValidatable<Out>;
    /**
     * validate minimum params count
     *
     * @since 1.0.0
     */
    min(min_: number): MethodValidatable<Out>;
    /**
     * validate maximum params count
     *
     * @since 1.0.0
     */
    max(max_: number): MethodValidatable<Out>;
};
/**
 * Validator for method-like values.
 * Unfortunately (for technical reasons), this validator can only validate the number of parameters.
 *
 * @since 1.0.0
 * @export
 * @class MethodValidator
 * @extends {Validator<Out>}
 * @implements {MethodValidatable<Out>}
 * @template Out
 */
export declare class MethodValidator<Out extends MethodLike> extends Validator<Out> implements MethodValidatable<Out> {
    count(count_: number): MethodValidatable<Out>;
    min(min_: number): MethodValidatable<Out>;
    max(max_: number): MethodValidatable<Out>;
    protected validateBaseType(value_: unknown): Out;
    private checkCount;
    private checkMin;
    private checkMax;
}
//# sourceMappingURL=method.d.ts.map