import { expect } from "chai";
import {
    priceOrder,
    product,
    shippingMethod,
} from "../src/chapter-6/split-phase.js";

describe("basic refactor", () => {
    it("priceOrder", () => {
        const result = priceOrder(product, 5, shippingMethod);
        expect(result).equal(100);
    });
});
