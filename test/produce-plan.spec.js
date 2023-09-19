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
    it("change production", () => {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
    describe("no producers", () => {
        // 생산자가 없는 경우
        let noProducers;
        beforeEach(() => {
            const data = {
                name: "No producers",
                producers: [],
                demand: 30,
                price: 20,
            };
            noProducers = new Province(data);
        });
        it("shortfall", () => {
            expect(noProducers.shortfall).equal(30);
        });
        it("profit", () => {
            expect(noProducers.profit).equal(0);
        });
        it("zero demand", () => {
            // 수요가 없을때
            asia.demand = 0;
            expect(asia.shortfall).equal(-25);
            expect(asia.profit).equal(0);
        });
        it("negative demand", () => {
            // 수요가 마이너스일때
            asia.demand = -1;
            expect(asia.shortfall).equal(-26);
            expect(asia.profit).equal(-10);
        });
        it("empty string demand", () => {
            // 수요가 빈 문자열일때
            asia.demand = "";
            expect(asia.shortfall).NaN;
            expect(asia.profit).NaN;
        });
    });
    describe.skip("string for producers", () => {
        it("", () => {
            const data = {
                name: "String producers",
                producers: "",
                demand: 30,
                price: 20,
            };
            const prov = new Province(data);
            expect(prov.shortfall).equal(0);
        });
    });
});
