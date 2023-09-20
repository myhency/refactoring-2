const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:20" },
        { temp: 58, time: "2016-11-10 09:30" },
        { temp: 53, time: "2016-11-10 09:40" },
        { temp: 51, time: "2016-11-10 09:50" },
    ],
};

const operationPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 55,
};

class NumberRange {
    constructor(min, max) {
        this._data = { min: min, max: max };
    }
    get min() {
        return this._data.min;
    }
    get max() {
        return this._data.max;
    }
}

function readingsOutsideRange(station, range) {
    return station.readings.filter(
        (r) => r.temp < range.min || r.temp > range.max
    );
}

export { station, readingsOutsideRange, operationPlan, NumberRange };

try {
    const range = new NumberRange(
        operationPlan.temperatureFloor,
        operationPlan.temperatureCeiling
    );
    const result = readingsOutsideRange(station, range);
    console.log(result);
} catch (error) {
    console.log(error);
}
