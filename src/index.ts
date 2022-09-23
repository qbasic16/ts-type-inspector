import { TypeInspector } from './inspector';

export type {
  AnyLike,
  ArrayItemValidator,
  ArrayItemValidatorArray, // deprecated
  CustomValidation,
  DateLike,
  MethodLike,
  ObjectLike,
  PropertyValidators,
  StrictValues,
  StrictValuesItem,
  UnitedValidators,
  UnitedValidatorsItem,
  Validatable,
  ValidationCondition
} from './types';

export { ValidationError } from './error';
export { Validator } from './validator/index';
export { TypeInspector };

export default new TypeInspector();
