import { Validator } from '.';
import type { Validatable } from '../types';
export declare type NullValidatable = Validatable<null>;
/**
 * Validator for null values
 *
 * @since 1.0.0
 * @export
 * @class NullValidator
 * @extends {Validator<null>}
 * @implements {NullValidatable}
 */
export declare class NullValidator extends Validator<null> implements NullValidatable {
    protected validateBaseType(value_: unknown): null;
}
//# sourceMappingURL=null.d.ts.map