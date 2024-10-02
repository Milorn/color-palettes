/* A function to generate hex strings in the shape of: #A46B9C */
const randomHex = () => {
    const red = Math.floor(Math.random() * 255).toString(16).padEnd(2, 0);
    const green = Math.floor(Math.random() * 255).toString(16).padEnd(2, 0);
    const blue = Math.floor(Math.random() * 255).toString(16).padEnd(2, 0);
    return '#' + red + green + blue;
};