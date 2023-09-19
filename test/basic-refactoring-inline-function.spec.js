import { expect } from "chai";
import { getRating, driver } from "../src/chapter-6/inline-function.js";

describe("basic refactor", () => {
    it("getRating", () => {
        const result = getRating(driver);
        expect(result).equal(2);
    });
});
