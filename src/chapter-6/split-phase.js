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

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase =
        priceData.basePrice > shippingMethod.discountThreshold
            ? shippingMethod.discountedFee
            : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount =
        Math.max(quantity - product.discountThreshold, 0) *
        product.basePrice *
        product.discountRate;
    return { basePrice, quantity, discount };
}

function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

try {
    const result = priceOrder(product, 5, shippingMethod);
    console.log(result);
} catch (error) {
    console.log(error);
}

export { priceOrder, product, shippingMethod };
