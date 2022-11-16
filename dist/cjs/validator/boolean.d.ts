import { Validator } from '.';
import type { Validatable } from '../types';
export declare type BooleanValidatable = Validatable<boolean> & {
    /**
     * accept just true
     *
     * @since 1.0.0
     */
    get true(): BooleanValidatable;
    /**
     * accept just false
     *
     * @since 1.0.0
     */
    get false(): BooleanValidatable;
};
/**
 * Validator for boolean values
 *
 * @since 1.0.0
 * @export
 * @class BooleanValidator
 * @extends {Validator<boolean>}
 * @implements {BooleanValidatable}
 */
export declare class BooleanValidator extends Validator<boolean> implements BooleanValidatable {
    get true(): BooleanValidatable;
    get false(): BooleanValidatable;
    protected validateBaseType(value_: unknown): boolean;
    private checkTrue;
    private checkFalse;
}
//# sourceMappingURL=boolean.d.ts.map