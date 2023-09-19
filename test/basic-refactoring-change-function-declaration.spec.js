import { expect } from "chai";
import { circumference } from "../src/chapter-6/change-function-declaration.js";

describe("basic refactor", () => {
    it("circumference", () => {
        const result = circumference(10);
        expect(result).equal(62.83185307179586);
    });
});
