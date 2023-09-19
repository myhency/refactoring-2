import assert from "assert";
import { expect } from "chai";

import { Province, sampleProvinceData } from "../src/chapter-4/index.js";

describe("province", () => {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });
    it("shortfall", () => {
        assert.equal(asia.shortfall, 5);
    });
    it("shortfall", () => {
        expect(asia.shortfall).equal(5);
    });
    it("profit", () => {
        expect(asia.profit).equal(230);
    });
});
