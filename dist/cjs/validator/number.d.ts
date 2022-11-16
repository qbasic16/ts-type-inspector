import { Validator } from '.';
import type { Validatable } from '../types';
export declare type NumberValidatable = Validatable<number> & {
    /**
     * accept positive values only (zero is not positive)
     *
     * @since 1.0.0
     */
    get positive(): NumberValidatable;
    /**
     * accept negative values only (zero is not negative)
     *
     * @since 1.0.0
     */
    get negative(): NumberValidatable;
    /**
     * reject NaN and Infinity
     *
     * @since 1.0.0
     */
    get finite(): NumberValidatable;
    /**
     * reject NaN
     *
     * @since 1.0.0
     */
    get rejectNaN(): NumberValidatable;
    /**
     * reject Infinity
     *
     * @since 1.0.0
     */
    get rejectInfinity(): NumberValidatable;
    /**
     * reject 0
     *
     * @since 1.0.0
     */
    get rejectZero(): NumberValidatable;
    /**
     * validate minimum value
     *
     * @since 1.0.0
     */
    min(min_: number): NumberValidatable;
    /**
     * validate maximum value
     *
     * @since 1.0.0
     */
    max(max_: number): NumberValidatable;
    /**
     * define accepted numbers
     *
     * @since 1.0.0
     */
    accept(...numbers_: ReadonlyArray<number>): NumberValidatable;
    /**
     * define rejected numbers
     *
     * @since 1.0.0
     */
    reject(...numbers_: ReadonlyArray<number>): NumberValidatable;
};
/**
 * Validator for numeric values
 *
 * @since 1.0.0
 * @export
 * @class NumberValidator
 * @extends {RangeValidator<number>}
 * @implements {NumberValidatorInterface}
 */
export declare class NumberValidator extends Validator<number> implements NumberValidatable {
    get positive(): NumberValidatable;
    get negative(): NumberValidatable;
    get finite(): NumberValidatable;
    get rejectNaN(): NumberValidatable;
    get rejectInfinity(): NumberValidatable;
    get rejectZero(): NumberValidatable;
    min(min_: number): NumberValidatable;
    max(max_: number): NumberValidatable;
    accept(...numbers_: ReadonlyArray<number>): NumberValidatable;
    reject(...numbers_: ReadonlyArray<number>): NumberValidatable;
    protected validateBaseType(value_: unknown): number;
    private checkFinite;
    private checkNaN;
    private checkInfinity;
    private checkZero;
    private checkMin;
    private checkMax;
    private checkNegative;
    private checkPositive;
    private checkAccepted;
    private checkRejected;
}
//# sourceMappingURL=number.d.ts.map