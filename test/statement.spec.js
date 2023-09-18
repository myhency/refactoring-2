const assert = require("assert");
const statement = require("../src/index.js");
const plays = require("../src/data/plays.json");
const invoices = require("../src/data/invoices.json");

describe("Test Chapter 01. 리팩터링: 첫 번째 예시", function () {
    describe("statement", () => {
        it("should return correct statement", () => {
            const expectedOutput = `청구 내역 (고객명: BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $580.00 (35석)
 Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점
`;
            const actualOutput = statement(invoices, plays);
            assert.strictEqual(actualOutput, expectedOutput);
        });
    });
});
