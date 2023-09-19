const order = {
    quantity: 10,
    itemPrice: 100,
};

function getPrice(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

export { order, getPrice };

try {
    const result = getPrice(order);
    console.log(result);
} catch (error) {
    console.log(error);
}
