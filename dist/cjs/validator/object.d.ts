import { Validator } from '.';
import type { ObjectLike, PropertyValidators, Validatable } from '../types';
export declare type ObjectValidatable<Out extends ObjectLike> = Validatable<Out> & {
    /**
     * Reject objects that contain more keys than have been validated
     * USE FOR POJOs ONLY!. Getter/Setter/Methods will lead to false negative results
     *
     * @since 1.0.0
     */
    get noOverload(): ObjectValidatable<Out>;
};
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
export declare class ObjectValidator<Out extends ObjectLike> extends Validator<Out> implements ObjectValidatable<Out> {
    private readonly _propertyValidators;
    constructor(_propertyValidators: PropertyValidators<Out>);
    get noOverload(): ObjectValidatable<Out>;
    protected validateBaseType(value_: unknown): Out;
    private isObjectLike;
    private checkOverload;
}
//# sourceMappingURL=object.d.ts.map