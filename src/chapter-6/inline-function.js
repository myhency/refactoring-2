const driver = {
    numberOfLateDeliveries: 6,
};

function getRating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

export { getRating, driver };

try {
    const result = getRating(driver);
    console.log(result);
} catch (error) {
    console.log(error);
}
