import Order from "../data/Order.js";
import { order } from "../data/index.js";

function getPrice(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

export { order, getPrice };

try {
    const _order = new Order(order);
    const result = getPrice(_order);
    console.log(result);
} catch (error) {
    console.log(error);
}
