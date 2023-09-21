const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer() {
        return this._customer;
    }
    get quantity() {
        return this._quantity;
    }
    get month() {
        return this._month;
    }
    get year() {
        return this._year;
    }
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableCharge() {
        return Math.max(0, this.baseCharge - taxThreshold(this.year));
    }
}

function acquireReading() {
    return reading;
}

function baseRate(month, year) {
    return month * year;
}

function taxThreshold(year) {
    return year * 10;
}

function taxableChargeFn(aReading) {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

// client 1
const aReadingC1 = acquireReading();
const baseChargeC1 =
    baseRate(aReadingC1.month, aReadingC1.year) * aReadingC1.quantity;

// client 2
const rawReadingC2 = acquireReading();
const aReadingC2 = new Reading(rawReadingC2);
const base = baseRate(aReadingC2.month, aReadingC2.year) * aReadingC2.quantity;
const taxableCharge = aReadingC2.taxableCharge;

// client 3
const rawReadingC3 = acquireReading();
const aReadingC3 = new Reading(rawReadingC3);
const basicChargeAmount = aReadingC3.baseCharge;

try {
    const resultC1 = baseChargeC1;
    const resultC2 = taxableCharge;
    const resultC3 = basicChargeAmount;
    console.log(resultC1, resultC2, resultC3);
} catch (error) {
    console.log(error);
}
