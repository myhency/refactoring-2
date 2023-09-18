const assert = require("assert");
const statement = require("../src/index.js");
const plays = require("../src/data/plays.json");
const invoices = require("../src/data/invoices.json");

describe("Test Chapter 01. 리팩터링: 첫 번째 예시", function () {
    describe("statement", function () {
        statement(invoices, plays);
    });
});
