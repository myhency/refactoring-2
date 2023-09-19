// const order = {
//     quantity: 10,
//     itemPrice: 100,
// };

class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {
        return this._data.quantity;
    }
    get itemPrice() {
        return this._data.itemPrice;
    }
    get price() {
        return (
            this.quantity * this.itemPrice -
            Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
            Math.min(this.quantity * this.itemPrice * 0.1, 100)
        );
    }
}

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
