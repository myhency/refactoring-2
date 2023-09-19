const driver = {
    numberOfLateDeliveries: 6,
};

function getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}

export { getRating, driver };

try {
    const result = getRating(driver);
    console.log(result);
} catch (error) {
    console.log(error);
}
