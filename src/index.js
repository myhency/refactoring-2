import { invoices, plays } from "./data/index.js";
import statement from "./statement.js";

try {
    const result = statement(invoices, plays);
    console.log(result);
} catch (error) {
    console.log(error);
}
