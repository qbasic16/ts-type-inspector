"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValidator = void 0;
const ts_lib_extended_1 = require("ts-lib-extended");
const _1 = require(".");
/**
 * Validator for enum values
 *
 * @since 1.0.2
 * @export
 * @class EnumValidator
 * @extends {Validator<EnumerableValue<E>>}
 * @implements {EnumValidatable<E>}
 * @template E
 */
class EnumValidator extends _1.Validator {
    constructor(_enum) {
        super();
        Object.defineProperty(this, "_enum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _enum
        });
    }
    values(validator_) {
        return this.setupCondition(value_ => this.checkValues(value_, validator_));
    }
    validateBaseType(value_) {
        if (!this.isEnumValue(this._enum, value_)) {
            this.throwValidationError('value does not exist in enum');
        }
        return value_;
    }
    isEnumValue(enum_, value_) {
        const values = ts_lib_extended_1.enumerableObject.values(enum_);
        for (let i = 0; i < values.length; i++) {
            if (values[i] === value_) {
                return true;
            }
        }
        return false;
    }
    checkValues(value_, validator_) {
        if (!validator_.isValid(value_)) {
            this.throwValidationError('value does not match enums base type');
        }
    }
}
exports.EnumValidator = EnumValidator;
