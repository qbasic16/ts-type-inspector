import { Validator } from '.';
import type { Validatable } from '../types';
export declare type StringValidatable = Validatable<string> & {
    /**
     * define minimum string length
     *
     * @since 1.0.0
     */
    shortest(min_: number): StringValidatable;
    /**
     * define maximum string length
     *
     * @since 1.0.0
     */
    longest(max_: number): StringValidatable;
    /**
     * define accepted values or patterns
     *
     * @since 1.0.0
     */
    accept(...accepted_: ReadonlyArray<(string | RegExp)>): StringValidatable;
    /**
     * define rejected values or patterns
     *
     * @since 1.0.0
     */
    reject(...rejected_: ReadonlyArray<(string | RegExp)>): StringValidatable;
    /**
     * specify exact string length
     *
     * @since 1.0.0
     */
    length(length_: number): StringValidatable;
    /**
     * reject empty string
     *
     * @since 1.0.0
     */
    get rejectEmpty(): StringValidatable;
    /**
     * value has to be a base64 encoded string
     *
     * @since 1.0.0
     */
    get base64(): StringValidatable;
    /**
     * value has to be a json string (stringified instance)
     * HINT: This check uses try-catch on JSON.parse. Keep this in mind for performance reasons (multiple parsing)
     *
     * @since 1.0.0
     */
    get json(): StringValidatable;
    /**
     * string has to be a valid ISO8601 date string
     *
     * @since 1.0.0
     */
    get date(): StringValidatable;
    /**
     * string has to be convertable to a number
     *
     * @since 1.0.0
     */
    get numeric(): StringValidatable;
    /**
     * string has to be an uuid (e.g. db91dc9f-9481-4843-a74b-4d027114102e)
     *
     * @since 1.0.0
     */
    get uuid(): StringValidatable;
    /**
     * string has to be an email.
     *
     * @since 1.0.0
     */
    get email(): StringValidatable;
    /**
     * string has to be an uri
     *
     * @since 1.0.0
     */
    get uri(): StringValidatable;
    /**
     * string has to be an url
     *
     * @since 1.0.0
     * @requires "WebWorker" lib when used in frontend web application
     */
    get url(): StringValidatable;
    /**
     * string has to contain hexadecimal characters only
     *
     * @since 1.0.0
     */
    get hex(): StringValidatable;
};
/**
 * Validator for string values.
 *
 * @since 1.0.0
 * @export
 * @class StringValidator
 * @extends {Validator<string>}
 * @implements {StringValidatable}
 */
export declare class StringValidator extends Validator<string> implements StringValidatable {
    shortest(min_: number): this;
    longest(max_: number): this;
    accept(...accepted_: ReadonlyArray<(string | RegExp)>): this;
    reject(...rejected_: ReadonlyArray<(string | RegExp)>): this;
    length(length_: number): this;
    get rejectEmpty(): this;
    get base64(): this;
    get json(): this;
    get date(): this;
    get numeric(): this;
    get uuid(): this;
    get email(): this;
    get uri(): this;
    get url(): this;
    get hex(): this;
    protected validateBaseType(value_: unknown): string;
    protected matches(item_: string | RegExp, value_: string): boolean;
    private isJsonString;
    private checkEmpty;
    private checkShortest;
    private checkLongest;
    private checkLength;
    private checkAccepted;
    private checkRejected;
    private checkBase64;
    private checkJson;
    private checkDate;
    private checkNumeric;
    private checkUuid;
    private checkHex;
    private checkEmail;
    private checkUri;
    private checkUrl;
}
//# sourceMappingURL=string.d.ts.map