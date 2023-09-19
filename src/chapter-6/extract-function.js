import { owingInvoice as invoices } from "../data/index.js";

// function printBanner() {
//     console.log("***********************");
// }

// function calculateOutstanding() {
//     return 10;
// }

// function printOwing(invoice) {
//     printBanner();
//     let outStanding = calculateOutstanding();
//     printDetails();

//     function printDetails() {
//         console.log(`고객명: ${invoice.customer}`);
//         console.log(`채무액: ${outStanding}`);
//     }
// }

class Clock {
    static get today() {
        return new Date(); // returns the current date
    }
}

function printOwing(invoice) {
    printBanner();

    const outStanding = calculateOutstanding(invoice);

    recordDueDate(invoice);

    printDetails(invoice, outStanding);

    function printBanner() {
        console.log("***********************");
        console.log("**** 고객 채무 ****");
        console.log("***********************");
    }
}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
}

function printDetails(invoice, outStanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outStanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

export { printOwing };

try {
    printOwing(invoices);
} catch (error) {
    console.log(error);
}