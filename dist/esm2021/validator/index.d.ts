import { ValidationError } from '../error';
import type { CustomValidation, Validatable, ValidationCondition } from '../types';
export declare abstract class Validator<Out extends In, In = unknown> implements Validatable<Out, In> {
    private _validationError;
    private _customValidation;
    private _customErrorMessage;
    private _conditions;
    constructor();
    /**
     * set if validation has failed
     *
     * @readonly
     * @type {(ValidationError | undefined)}
     * @memberof Validator
     */
    get validationError(): ValidationError | undefined;
    /**
     * add a custom validation; return a error message if validation fails
     *
     * @param {CustomValidation<Out>} evaluation_
     * @return {*}  {this}
     * @memberof Validator
     */
    custom(evaluation_: CustomValidation<Out>): this;
    /**
     * custom error message (overrides all hard coded messages)
     *
     * @param {(string | (() => string))} message_
     * @return {*}  {this}
     * @memberof Validator
     */
    error(message_: string | (() => string)): this;
    /**
     * validate value
     *
     * @param {In} value_
     * @return {*}  {V}
     * @memberof Validator
     */
    validate(value_: In): Out;
    /**
     * validate value
     *
     * @param {In} value_
     * @return {*}  {value_ is V} true if valid; false if invalid; this is a type predicate - asserted type will be associated to value if true
     * @memberof Validator
     */
    isValid(value_: In): value_ is Out;
    protected abstract validateBaseType(value_: In): Out;
    protected detectError(reason_: unknown, propertyTraces_?: PropertyKey[]): Error;
    protected rethrowError(reason_: unknown, trace_?: PropertyKey): never;
    protected throwValidationError(message_: string, propertyTrace_?: ReadonlyArray<PropertyKey>, subErrors_?: ReadonlyArray<Error>): never;
    protected setupCondition(condition_: ValidationCondition<Out>): this;
    private isValidationError;
    private hasMessage;
}
//# sourceMappingURL=index.d.ts.map