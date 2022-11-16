"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const error_1 = require("../error");
class Validator {
    constructor() {
        Object.defineProperty(this, "_validationError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_customValidation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_customErrorMessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_conditions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._conditions = [];
    }
    /**
     * set if validation has failed
     *
     * @readonly
     * @type {(ValidationError | undefined)}
     * @memberof Validator
     */
    get validationError() { return this._validationError; }
    /**
     * add a custom validation; return a error message if validation fails
     *
     * @param {CustomValidation<Out>} evaluation_
     * @return {*}  {this}
     * @memberof Validator
     */
    custom(evaluation_) {
        this._customValidation = evaluation_;
        return this;
    }
    /**
     * custom error message (overrides all hard coded messages)
     *
     * @param {(string | (() => string))} message_
     * @return {*}  {this}
     * @memberof Validator
     */
    error(message_) {
        this._customErrorMessage = message_;
        return this;
    }
    /**
     * validate value
     *
     * @param {In} value_
     * @return {*}  {V}
     * @memberof Validator
     */
    validate(value_) {
        var _a;
        const value = this.validateBaseType(value_);
        for (let i = 0; i < this._conditions.length; i++) {
            this._conditions[i](value);
        }
        const customEvaluationResult = (_a = this._customValidation) === null || _a === void 0 ? void 0 : _a.call(this, value);
        if (customEvaluationResult !== undefined) {
            this.throwValidationError(customEvaluationResult);
        }
        return value;
    }
    /**
     * validate value
     *
     * @param {In} value_
     * @return {*}  {value_ is V} true if valid; false if invalid; this is a type predicate - asserted type will be associated to value if true
     * @memberof Validator
     */
    isValid(value_) {
        try {
            this.validate(value_);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    detectError(reason_, propertyTraces_) {
        if (this.isValidationError(reason_)) {
            if (reason_.propertyTrace && propertyTraces_) {
                propertyTraces_.push(...reason_.propertyTrace);
            }
            return reason_;
        }
        else if (reason_ instanceof Error) {
            return reason_;
        }
        else if (this.hasMessage(reason_) && typeof reason_.message === 'string' && reason_.message !== '') {
            return new Error(reason_.message);
        }
        else {
            return new Error('unknown error');
        }
    }
    rethrowError(reason_, trace_) {
        const propertyTraces = trace_ === undefined ? [] : [trace_];
        const error = this.detectError(reason_, propertyTraces);
        this.throwValidationError(error.message, propertyTraces, [error]);
    }
    throwValidationError(message_, propertyTrace_, subErrors_) {
        let errorMessage;
        switch (typeof this._customErrorMessage) {
            case 'string':
                errorMessage = this._customErrorMessage;
                break;
            case 'function':
                errorMessage = this._customErrorMessage();
                break;
            default:
                errorMessage = message_;
                break;
        }
        throw this._validationError = new error_1.ValidationError(errorMessage, propertyTrace_, subErrors_);
    }
    setupCondition(condition_) {
        this._conditions.push(condition_);
        return this;
    }
    isValidationError(reason_) {
        return typeof reason_ === 'object' && reason_ !== null && error_1.VALIDATION_ERROR_MARKER in reason_;
    }
    hasMessage(value_) {
        return typeof value_ === 'object' && value_ !== null && 'message' in value_;
    }
}
exports.Validator = Validator;
