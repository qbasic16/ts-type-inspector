import { Validator } from '.';
import type { Validatable } from '../types';
export declare type NullishValidatable = Validatable<null | undefined>;
/**
 * Validator for nullish values (null or undefined)
 *
 * @since 1.0.0
 * @export
 * @class NullishValidator
 * @extends {(Validator<null | undefined>)}
 * @implements {NullishValidatable}
 */
export declare class NullishValidator extends Validator<null | undefined> implements NullishValidatable {
    protected validateBaseType(value_: unknown): null | undefined;
}
//# sourceMappingURL=nullish.d.ts.map