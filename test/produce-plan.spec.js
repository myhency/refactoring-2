import assert from "assert";
import { expect } from "chai";

import { Province, sampleProvinceData } from "../src/chapter-4/index.js";

describe("province", () => {
    it("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
    it("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
    it("profit", () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    });
});
