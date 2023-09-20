import {
    station,
    readingsOutsideRange,
    operationPlan,
    NumberRange,
} from "../src/chapter-6/introduce-parameter-object.js";
import { expect } from "chai";

describe("basic refactor", () => {
    it("readingsOutsideRange", () => {
        const expectedOutput = [
            { temp: 47, time: "2016-11-10 09:10" },
            { temp: 58, time: "2016-11-10 09:30" },
        ];
        const range = new NumberRange(
            operationPlan.temperatureFloor,
            operationPlan.temperatureCeiling
        );
        const result = readingsOutsideRange(station, range);
        expect(result).to.deep.equal(expectedOutput);
    });
});
