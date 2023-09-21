const product = {
    basePrice: 10,
    discountThreshold: 5,
    discountRate: 0.1,
};

const shippingMethod = {
    discountThreshold: 5,
    discountedFee: 10,
    feePerCase: 20,
};

function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount =
        Math.max(quantity - product.discountThreshold, 0) *
        product.basePrice *
        product.discountRate;
    const shippingPerCase =
        basePrice > shippingMethod.discountThreshold
            ? shippingMethod.discountedFee
            : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

try {
    const result = priceOrder(product, 5, shippingMethod);
    console.log(result);
} catch (error) {
    console.log(error);
}

export { priceOrder, product, shippingMethod };
