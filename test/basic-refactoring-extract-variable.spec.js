import { expect } from "chai";
import { order, getPrice } from "../src/chapter-6/extract-variable.js";

describe("basic refactor", () => {
    it("getPrice", () => {
        const result = getPrice(order);
        expect(result).equal(1100);
    });
});
