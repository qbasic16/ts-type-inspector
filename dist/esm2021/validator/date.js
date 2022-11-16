import { Validator } from '.';
/**
 * Validator for date objects
 *
 * @since 1.0.0
 * @export
 * @class DateValidator
 * @extends {Validator<Date>}
 * @implements {DateValidatable}
 */
export class DateValidator extends Validator {
    earliest(earliest_) {
        return this.setupCondition(value_ => this.checkEarliest(value_, earliest_));
    }
    latest(latest_) {
        return this.setupCondition(value_ => this.checkLatest(value_, latest_));
    }
    accept(...items_) {
        return this.setupCondition(value_ => this.checkAccepted(value_, items_));
    }
    reject(...items_) {
        return this.setupCondition(value_ => this.checkRejected(value_, items_));
    }
    validateBaseType(value_) {
        if (!this.isDate(value_)) {
            this.throwValidationError('value is not a date');
        }
        if (isNaN(this.toTime(value_))) {
            this.throwValidationError('date is invalid');
        }
        return value_;
    }
    isDate(value_) {
        return !!value_ && Object.prototype.toString.call(value_) === '[object Date]';
    }
    toTime(value_) {
        switch (typeof value_) {
            case 'number':
                return value_;
            case 'string':
                return new Date(value_).getTime();
            default:
                return value_.getTime();
        }
    }
    checkEarliest(value_, earliest_) {
        const valueTime = this.toTime(value_);
        const earliestTime = this.toTime(earliest_);
        if (!isNaN(earliestTime) && valueTime < earliestTime) {
            this.throwValidationError('date is too early');
        }
    }
    checkLatest(value_, latest_) {
        const valueTime = this.toTime(value_);
        const latestTime = this.toTime(latest_);
        if (!isNaN(latestTime) && valueTime > latestTime) {
            this.throwValidationError('date is too late');
        }
    }
    checkAccepted(value_, acceptedItems_) {
        const valueTime = this.toTime(value_);
        for (let i = 0; i < acceptedItems_.length; i++) {
            if (valueTime === this.toTime(acceptedItems_[i])) {
                return;
            }
        }
        this.throwValidationError('date is not accepted');
    }
    checkRejected(value_, rejectedItems_) {
        const valueTime = this.toTime(value_);
        for (let i = 0; i < rejectedItems_.length; i++) {
            if (valueTime === this.toTime(rejectedItems_[i])) {
                this.throwValidationError('date is rejected');
            }
        }
    }
}
