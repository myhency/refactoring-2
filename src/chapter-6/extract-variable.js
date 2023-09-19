const order = {
    quantity: 10,
    itemPrice: 100,
};

function getPrice(order) {
    return (
        order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
    );
}

export { order, getPrice };

try {
    const result = getPrice(order);
    console.log(result);
} catch (error) {
    console.log(error);
}
