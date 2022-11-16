"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.VALIDATION_ERROR_MARKER = void 0;
exports.VALIDATION_ERROR_MARKER = '__isValidationError';
class ValidationError extends Error {
    constructor(errorMessage_, propertyTrace, subErrors) {
        super(errorMessage_);
        Object.defineProperty(this, "propertyTrace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: propertyTrace
        });
        Object.defineProperty(this, "subErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: subErrors
        });
        Object.defineProperty(this, _a, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "propertyPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (this.propertyTrace && this.propertyTrace.length > 0) {
            this.propertyPath = this.propertyTrace.join('.');
        }
    }
}
exports.ValidationError = ValidationError;
_a = exports.VALIDATION_ERROR_MARKER;
