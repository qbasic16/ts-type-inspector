import { Validator } from '.';
import type { DateLike, Validatable } from '../types';
export declare type DateValidatable = Validatable<Date> & {
    /**
     * define earliest accepted date
     *
     * @since 1.0.0
     */
    earliest(earliest_: DateLike): DateValidatable;
    /**
     * define latest accepted date
     *
     * @since 1.0.0
     */
    latest(latest_: DateLike): DateValidatable;
    /**
     * define accepted dates
     *
     * @since 1.0.0
     */
    accept(...items_: ReadonlyArray<DateLike>): DateValidatable;
    /**
     * define rejected dates
     *
     * @since 1.0.0
     */
    reject(...items_: ReadonlyArray<DateLike>): DateValidatable;
};
/**
 * Validator for date objects
 *
 * @since 1.0.0
 * @export
 * @class DateValidator
 * @extends {Validator<Date>}
 * @implements {DateValidatable}
 */
export declare class DateValidator extends Validator<Date> implements DateValidatable {
    earliest(earliest_: DateLike): DateValidatable;
    latest(latest_: DateLike): DateValidatable;
    accept(...items_: ReadonlyArray<DateLike>): DateValidatable;
    reject(...items_: ReadonlyArray<DateLike>): DateValidatable;
    protected validateBaseType(value_: unknown): Date;
    private isDate;
    private toTime;
    private checkEarliest;
    private checkLatest;
    private checkAccepted;
    private checkRejected;
}
//# sourceMappingURL=date.d.ts.map