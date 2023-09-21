const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client 1
const aReadingC1 = acquireReading();
const baseChargeC1 =
    baseRate(aReadingC1.month, aReadingC1.year) * aReadingC1.quantity;

// client 2
const aReadingC2 = acquireReading();
const base = baseRate(aReadingC2.month, aReadingC2.year) * aReadingC2.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReadingC2.year));

// client 3
const aReadingC3 = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReadingC3);

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function acquireReading() {
    return reading;
}
