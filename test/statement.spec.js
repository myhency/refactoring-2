import { strictEqual } from "assert";
import statement from "../src/statement.js";
import { invoices, plays } from "../src/data/index.js";

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
            strictEqual(actualOutput, expectedOutput);
        });
    });
});
