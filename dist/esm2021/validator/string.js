import sidewayAddress from '@sideway/address';
import { URL } from 'url';
import { Validator } from '.';
/**
 * Validator for string values.
 *
 * @since 1.0.0
 * @export
 * @class StringValidator
 * @extends {Validator<string>}
 * @implements {StringValidatable}
 */
export class StringValidator extends Validator {
    shortest(min_) {
        return this.setupCondition(value_ => this.checkShortest(value_, min_));
    }
    longest(max_) {
        return this.setupCondition(value_ => this.checkLongest(value_, max_));
    }
    accept(...accepted_) {
        return this.setupCondition(value_ => this.checkAccepted(value_, accepted_));
    }
    reject(...rejected_) {
        return this.setupCondition(value_ => this.checkRejected(value_, rejected_));
    }
    length(length_) {
        return this.setupCondition(value_ => this.checkLength(value_, length_));
    }
    get rejectEmpty() {
        return this.setupCondition(value_ => this.checkEmpty(value_));
    }
    get base64() {
        return this.setupCondition(value_ => this.checkBase64(value_));
    }
    get json() {
        return this.setupCondition(value_ => this.checkJson(value_));
    }
    get date() {
        return this.setupCondition(value_ => this.checkDate(value_));
    }
    get numeric() {
        return this.setupCondition(value_ => this.checkNumeric(value_));
    }
    get uuid() {
        return this.setupCondition(value_ => this.checkUuid(value_));
    }
    get email() {
        return this.setupCondition(value_ => this.checkEmail(value_));
    }
    get uri() {
        return this.setupCondition(value_ => this.checkUri(value_));
    }
    get url() {
        return this.setupCondition(value_ => this.checkUrl(value_));
    }
    get hex() {
        return this.setupCondition(value_ => this.checkHex(value_));
    }
    validateBaseType(value_) {
        if (typeof value_ !== 'string') {
            this.throwValidationError('value is not a string');
        }
        return value_;
    }
    matches(item_, value_) {
        if (typeof item_ === 'string') {
            return item_ === value_;
        }
        else {
            return item_.test(value_);
        }
    }
    isJsonString(value_) {
        try {
            JSON.parse(value_);
        }
        catch {
            return false;
        }
        return true;
    }
    checkEmpty(value_) {
        if (value_ === '') {
            this.throwValidationError('string is empty');
        }
    }
    checkShortest(value_, shortest_) {
        if (value_.length < shortest_) {
            this.throwValidationError('string length is too short');
        }
    }
    checkLongest(value_, longest_) {
        if (value_.length > longest_) {
            this.throwValidationError('string length is too long');
        }
    }
    checkLength(value_, length_) {
        if (value_.length !== length_) {
            this.throwValidationError('string has invalid length');
        }
    }
    checkAccepted(value_, accepted_) {
        for (let i = 0; i < accepted_.length; i++) {
            if (this.matches(accepted_[i], value_)) {
                return;
            }
        }
        this.throwValidationError('string is not accepted');
    }
    checkRejected(value_, rejected_) {
        for (let i = 0; i < rejected_.length; i++) {
            if (this.matches(rejected_[i], value_)) {
                this.throwValidationError('string is rejected');
            }
        }
    }
    checkBase64(value_) {
        if (!/^([0-9a-zA-Z+\/]{4})*(([0-9a-zA-Z+\/]{2}==)|([0-9a-zA-Z+\/]{3}=))?$/.test(value_)) {
            this.throwValidationError('string is not base64 encoded');
        }
    }
    checkJson(value_) {
        if (!this.isJsonString(value_)) {
            this.throwValidationError('string is not a valid json string');
        }
    }
    checkDate(value_) {
        if (isNaN(new Date(value_).getTime())) {
            this.throwValidationError('string is not iso 8601 date string');
        }
    }
    checkNumeric(value_) {
        if (!isFinite(Number(value_))) {
            this.throwValidationError('string is not numeric');
        }
    }
    checkUuid(value_) {
        if (!/^[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}$/.test(value_)) {
            this.throwValidationError('string is not an uuid');
        }
    }
    checkHex(value_) {
        if (!/^[0-9a-fA-F]+$/.test(value_)) {
            this.throwValidationError('string is not a hexadecimal value');
        }
    }
    checkEmail(value_) {
        if (!sidewayAddress.email.isValid(value_)) {
            this.throwValidationError('string is not an email address');
        }
    }
    checkUri(value_) {
        if (!sidewayAddress.uri.regex({ allowQuerySquareBrackets: true }).regex.test(value_)) {
            this.throwValidationError('string is not a uri');
        }
    }
    checkUrl(value_) {
        if (!URL) {
            this.throwValidationError('URL is not defined! Please use "Webworker" lib for frontend web applications');
        }
        try {
            new URL(value_); // requires WebWorkers in browser
        }
        catch {
            this.throwValidationError('string is not a url');
        }
    }
}
