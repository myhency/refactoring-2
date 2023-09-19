const order = {
    quantity: 10,
    itemPrice: 100,
};

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
        return this.basePrice - this.quantityDiscount + this.shipping;
    }
    get basePrice() {
        return this.quantity * this.itemPrice;
    }
    get quantityDiscount() {
        return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }
    get shipping() {
        return Math.min(this.basePrice * 0.1, 100);
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
    const _order = new Order(order);
    const result = getPrice(_order);
    console.log(result);
} catch (error) {
    console.log(error);
}
