import {
    station,
    readingsOutsideRange,
} from "../src/chapter-6/introduce-parameter-object.js";
import { expect } from "chai";

describe("basic refactor", () => {
    it("readingsOutsideRange", () => {
        const expectedOutput = [
            { temp: 47, time: "2016-11-10 09:10" },
            { temp: 58, time: "2016-11-10 09:30" },
        ];
        const result = readingsOutsideRange(station, 50, 55);
        expect(result).to.deep.equal(expectedOutput);
    });
});
