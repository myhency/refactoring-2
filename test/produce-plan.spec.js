import { equal } from "assert";
import { Province, sampleProvinceData } from "../src/chapter-4/index.js";

describe("province", () => {
    it("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        equal(asia.shortfall, 5);
    });
});
