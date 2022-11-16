import { AnyValidator } from './validator/any';
import { ArrayValidator } from './validator/array';
import { BooleanValidator } from './validator/boolean';
import { CustomValidator } from './validator/custom';
import { DateValidator } from './validator/date';
import { DictionaryValidator } from './validator/dictionary';
import { EnumValidator } from './validator/enum';
import { ExcludeValidator } from './validator/exclude';
import { MethodValidator } from './validator/method';
import { NullValidator } from './validator/null';
import { NullishValidator } from './validator/nullish';
import { NumberValidator } from './validator/number';
import { ObjectValidator } from './validator/object';
import { OptionalValidator } from './validator/optional';
import { StrictValidator } from './validator/strict';
import { StringValidator } from './validator/string';
import { UndefinedValidator } from './validator/undefined';
import { UnionValidator } from './validator/union';
/**
 * Collection of gadgets for type inspection
 *
 * @export
 * @class TypeInspector
 */
export class TypeInspector {
    /**
     * Validate string values.
     *
     * @since 1.0.0
     * @readonly
     * @type {StringValidator}
     * @memberof TypeInspector
     */
    get string() { return new StringValidator(); }
    /**
     * Validate numeric values.
     *
     * @since 1.0.0
     * @readonly
     * @type {NumberValidator}
     * @memberof TypeInspector
     */
    get number() { return new NumberValidator(); }
    /**
     * Validate boolean values.
     *
     * @since 1.0.0
     * @readonly
     * @type {BooleanValidator}
     * @memberof TypeInspector
     */
    get boolean() { return new BooleanValidator(); }
    /**
     * Validate method-like values.
     * Unfortunately (for technical reasons), this validator can only validate the number of parameters.
     *
     * @since 1.0.0
     * @readonly
     * @type {MethodValidator<MethodLike>}
     * @memberof TypeInspector
     */
    get method() {
        return new MethodValidator();
    }
    /**
     * Validate data values.
     *
     * @since 1.0.0
     * @readonly
     * @type {DateValidator}
     * @memberof TypeInspector
     */
    get date() { return new DateValidator(); }
    /**
     * Validate undefined values... The value has to be undefined to match this validator
     *
     * @since 1.0.0
     * @readonly
     * @type {UndefinedValidator}
     * @memberof TypeInspector
     */
    get undefined() { return new UndefinedValidator(); }
    /**
     * Validate null values... The value has to be null to match this validator
     *
     * @since 1.0.0
     * @readonly
     * @type {NullValidator}
     * @memberof TypeInspector
     */
    get null() { return new NullValidator(); }
    /**
     * Validate nullish values
     *
     * @readonly
     * @type {NullishValidator}
     * @memberof TypeInspector
     */
    get nullish() { return new NullishValidator(); }
    /**
     * Validate values through strict equality (===). Keep in mind that objects are compared by reference
     *
     * @since 1.0.0
     * @template V
     * @template S
     * @param {...S} values_ List of values that are accepted
     * @return {*}  {StrictValidator<V, S>}
     * @memberof TypeInspector
     */
    strict(...values_) {
        return new StrictValidator(...values_);
    }
    /**
     * Validate array values
     *
     * @since 1.0.0
     * @template V Array item validator type
     * @template A Array item type
     * @param {V} itemValidator_ Validator for array items
     * @return {*}  {ArrayValidator<A>}
     * @memberof TypeInspector
     */
    array(itemValidator_) {
        return new ArrayValidator(itemValidator_);
    }
    /**
     * Validate union types like "string | number" or optional properties.
     * At least one validator have to match for a positive result
     *
     * @since 1.0.0
     * @template V
     * @template U
     * @param {...U} validators_ Validators for each part of the union type
     * @return {*}  {UnionValidator<V>}
     * @memberof TypeInspector
     */
    union(...validators_) {
        return new UnionValidator(...validators_);
    }
    /**
     * Validate object based values. Each property has to match its specified validator
     *
     * @since 1.0.0
     * @template V
     * @param {PropertyValidators<V>} propertyValidators_ Validators for each object property
     * @return {*}  {ObjectValidator<V>}
     * @memberof TypeInspector
     */
    object(propertyValidators_) {
        return new ObjectValidator(propertyValidators_);
    }
    /**
     * Validate dictionary values.
     *
     * @since 1.0.0
     * @template V
     * @param {Validatable<DictionaryValue<V>>} itemValidator_ Validator for dictionary values
     * @return {*}  {DictionaryValidator<V>}
     * @memberof TypeInspector
     */
    dictionary(itemValidator_) {
        return new DictionaryValidator(itemValidator_);
    }
    /**
     * This validator should only be used when a value is indeterminate or when you want to bypass deep validation of an object
     *
     * @since 1.0.0
     * @readonly
     * @type {AnyValidator}
     * @memberof TypeInspector
     */
    get any() {
        return new AnyValidator();
    }
    /**
     * Validate for optional properties/values
     *
     * @since 1.0.0
     * @template V
     * @param {Validatable<V>} validator_ Validator for the non-optional part
     * @return {*}  {OptionalValidator<V>}
     * @memberof TypeInspector
     */
    optional(validator_) {
        return new OptionalValidator(validator_);
    }
    /**
     * Validate with custom validation
     *
     * @since 1.0.0
     * @template V
     * @param {CustomValidation<unknown>} validationCallback_ Return an error message if validation fails; else undefined
     * @return {*}  {CustomValidator<V>}
     * @memberof TypeInspector
     */
    custom(validationCallback_) {
        return new CustomValidator(validationCallback_);
    }
    /**
     * Validate enum values
     *
     * @since 1.0.2
     * @template E
     * @param {E} enum_ the enum instance itself, NOT a value from enum
     * @return {*}  {EnumValidator<E>}
     * @memberof TypeInspector
     */
    enum(enum_) {
        return new EnumValidator(enum_);
    }
    /**
     * This validator is able to validate if a type doesn't exist in a KNOWN union type.
     * The generics "Out" and "In" have to be set. "In" describes the incoming union type and "Out" the desired output type.
     * The passed validator checks whether the undesired types (= In - Out) exist in the value.
     *
     * @since 1.1.0
     * @template Out
     * @template In
     * @param {Validator<Exclude<In, Out>>} validator_
     * @return {*}  {ExcludeValidator<Out, In>}
     * @memberof TypeInspector
     */
    exclude(validator_) {
        return new ExcludeValidator(validator_);
    }
}
