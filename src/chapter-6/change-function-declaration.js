function circum(radius) {
    return 2 * Math.PI * radius;
}

export { circum };

try {
    const result = circum(10);
    console.log(result);
} catch (error) {
    console.log(error);
}
