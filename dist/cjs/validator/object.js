"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectValidator = void 0;
const _1 = require(".");
/**
 * Validator for object based values. Each property has to match its specified validator
 *
 * @since 1.0.0
 * @export
 * @class ObjectValidator
 * @extends {Validator<Out>}
 * @implements {ObjectValidatable<Out>}
 * @template Out
 */
class ObjectValidator extends _1.Validator {
    constructor(_propertyValidators) {
        super();
        Object.defineProperty(this, "_propertyValidators", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _propertyValidators
        });
    }
    get noOverload() {
        return this.setupCondition(value_ => this.checkOverload(value_));
    }
    validateBaseType(value_) {
        if (!this.isObjectLike(value_)) {
            this.throwValidationError('value is not an object');
        }
        for (const validatorKey in this._propertyValidators) {
            try {
                // keep optional parameters in mind! The value must be validated even if it is undefined
                this._propertyValidators[validatorKey].validate(value_[validatorKey]);
            }
            catch (reason_) {
                this.rethrowError(reason_, validatorKey);
            }
        }
        return value_;
    }
    isObjectLike(value_) {
        return typeof value_ === 'object' && value_ !== null;
    }
    checkOverload(value_) {
        for (const propertyKey in value_) {
            if (!(propertyKey in this._propertyValidators)) {
                this.throwValidationError('value is overloaded');
            }
        }
    }
}
exports.ObjectValidator = ObjectValidator;
