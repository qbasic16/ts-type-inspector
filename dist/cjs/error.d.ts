export declare const VALIDATION_ERROR_MARKER = "__isValidationError";
export declare class ValidationError extends Error {
    readonly propertyTrace?: readonly PropertyKey[] | undefined;
    readonly subErrors?: readonly Error[] | undefined;
    readonly [VALIDATION_ERROR_MARKER] = true;
    readonly propertyPath: string | undefined;
    constructor(errorMessage_: string, propertyTrace?: readonly PropertyKey[] | undefined, subErrors?: readonly Error[] | undefined);
}
//# sourceMappingURL=error.d.ts.map