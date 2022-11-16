import { Validator } from '.';
import type { Validatable } from '../types';
export declare type OptionalValidatable<V> = Validatable<undefined | V>;
/**
 * Validator for optional (maybe undefined) properties/values
 *
 * @since 1.0.0
 * @export
 * @class OptionalValidator
 * @extends {(Validator<undefined | V>)}
 * @implements {OptionalValidatable<V>}
 * @template V
 */
export declare class OptionalValidator<V> extends Validator<undefined | V> implements OptionalValidatable<V> {
    private readonly _validator;
    constructor(_validator: Validatable<V>);
    protected validateBaseType(value_: unknown): undefined | V;
}
//# sourceMappingURL=optional.d.ts.map