import { expect } from "chai";
import sinon from "sinon";
import { printOwing } from "../src/chapter-6/extract-function.js";
import { owingInvoice as invoices } from "../src/data/index.js";

describe("basic refactor", () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, "log");
    });
    afterEach(() => {
        consoleLogSpy.restore();
    });

    it.skip("printOwing", () => {
        printOwing(invoices);

        expect(consoleLogSpy.calledWith("***********************")).to.be.true;
        expect(consoleLogSpy.calledWith("고객명: BigCo")).to.be.true;
        expect(consoleLogSpy.calledWith("채무액: 10")).to.be.true;
    });

    it("printOwing", () => {
        printOwing(invoices);
        expect(consoleLogSpy.calledWith("***********************")).to.be.true;
        expect(consoleLogSpy.calledWith("**** 고객 채무 ****")).to.be.true;
        expect(consoleLogSpy.calledWith("***********************")).to.be.true;
        expect(consoleLogSpy.calledWith("고객명: BigCo")).to.be.true;
        expect(consoleLogSpy.calledWith("채무액: 130")).to.be.true;
        expect(consoleLogSpy.calledWith("마감일: 10/19/2023")).to.be.true;
    });
});
