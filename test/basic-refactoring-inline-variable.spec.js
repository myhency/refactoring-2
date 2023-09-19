import { expect } from "chai";
import { order } from "../src/data/index.js";
import Order from "../src/data/Order.js";
import { getIsBasePrice } from "../src/chapter-6/inline-variable.js";

describe("basic refactor", () => {
    let _order;
    beforeEach(() => {
        _order = new Order(order);
    });

    it("getIsBasePrice", () => {
        const result = getIsBasePrice(_order);
        expect(result).equal(false);
    });
});
