import { expect } from "chai";
import { circum } from "../src/chapter-6/change-function-declaration.js";

describe("basic refactor", () => {
    it("circum", () => {
        const result = circum(10);
        expect(result).equal(62.83185307179586);
    });
});
