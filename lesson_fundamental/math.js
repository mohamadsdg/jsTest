const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const sumAsync = (...arg) => Promise.resolve(sum(...arg));
const subtractAsync = (...arg) => Promise.resolve(subtract(...arg));

module.exports = { sum, subtract, sumAsync, subtractAsync };
