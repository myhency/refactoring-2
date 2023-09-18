import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const playsData = fs.readFileSync(
    path.resolve(__dirname, "./plays.json"),
    "utf8"
);
const invoicesData = fs.readFileSync(
    path.resolve(__dirname, "./invoices.json"),
    "utf8"
);
const plays = JSON.parse(playsData);
const invoices = JSON.parse(invoicesData);

export { plays, invoices };
