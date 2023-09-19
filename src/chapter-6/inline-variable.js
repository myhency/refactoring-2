import Order from "../data/Order.js";
import { order } from "../data/index.js";

function getIsBasePrice(anOrder) {
    return anOrder.basePrice > 1000;
}

export { getIsBasePrice };

try {
    const _order = new Order(order);
    const result = getIsBasePrice(_order);
    console.log(result);
} catch (error) {
    console.log(error);
}
