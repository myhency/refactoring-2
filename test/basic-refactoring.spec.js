import { expect } from "chai";
import sinon from "sinon";
import { printOwing } from "../src/chapter-6/index.js";
import { invoices } from "../src/data/index.js";

describe("basic refactor", () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, "log");
    });
    afterEach(() => {
        consoleLogSpy.restore();
    });

    it("printOwing", () => {
        printOwing(invoices);

        expect(consoleLogSpy.calledWith("***********************")).to.be.true;
        expect(consoleLogSpy.calledWith("고객명: BigCo")).to.be.true;
        expect(consoleLogSpy.calledWith("채무액: 10")).to.be.true;
    });
});
