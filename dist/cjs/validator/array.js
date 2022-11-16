"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayValidator = void 0;
const _1 = require(".");
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
class ArrayValidator extends _1.Validator {
    constructor(_itemValidator) {
        super();
        Object.defineProperty(this, "_itemValidator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _itemValidator
        });
    }
    length(length_) {
        return this.setupCondition(value_ => this.checkLength(value_, length_));
    }
    min(min_) {
        return this.setupCondition(value_ => this.checkMin(value_, min_));
    }
    max(max_) {
        return this.setupCondition(value_ => this.checkMax(value_, max_));
    }
    accept(...items_) {
        return this.setupCondition(value_ => this.checkAccepted(value_, items_));
    }
    reject(...items_) {
        return this.setupCondition(value_ => this.checkRejected(value_, items_));
    }
    validateBaseType(value_) {
        if (!Array.isArray(value_)) {
            this.throwValidationError('value is not an array');
        }
        for (let i = 0; i < value_.length; i++) {
            try {
                this._itemValidator.validate(value_[i]);
            }
            catch (reason_) {
                this.rethrowError(reason_, i);
            }
        }
        return value_;
    }
    checkLength(value_, length_) {
        if (value_.length !== length_) {
            this.throwValidationError('deviant length');
        }
    }
    checkMin(value_, min_) {
        if (value_.length < min_) {
            this.throwValidationError('too few items');
        }
    }
    checkMax(value_, max_) {
        if (value_.length > max_) {
            this.throwValidationError('too many items');
        }
    }
    checkAccepted(value_, acceptedItems_) {
        for (let i = 0; i < value_.length; i++) {
            if (!acceptedItems_.includes(value_[i])) {
                this.throwValidationError('item is not accepted');
            }
        }
    }
    checkRejected(value_, rejectedItems_) {
        for (let i = 0; i < value_.length; i++) {
            if (rejectedItems_.includes(value_[i])) {
                this.throwValidationError('item is rejected');
            }
        }
    }
}
exports.ArrayValidator = ArrayValidator;
