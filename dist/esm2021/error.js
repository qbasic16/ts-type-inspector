var _a;
export const VALIDATION_ERROR_MARKER = '__isValidationError';
export class ValidationError extends Error {
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
_a = VALIDATION_ERROR_MARKER;
