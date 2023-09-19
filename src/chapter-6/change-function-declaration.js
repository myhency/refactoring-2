function circumference(radius) {
    return 2 * Math.PI * radius;
}

export { circumference };

try {
    const result = circumference(10);
    console.log(result);
} catch (error) {
    console.log(error);
}
