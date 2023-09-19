import { invoices } from "../data/index.js";

function printBanner() {
    console.log("***********************");
}

function calculateOutstanding() {
    return 10;
}

function printOwing(invoice) {
    printBanner();
    let outStanding = calculateOutstanding();

    // 세부 사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outStanding}`);
}

export { printOwing };

try {
    printOwing(invoices);
} catch (error) {
    console.log(error);
}
