const operaciones = {
    sumar:(a, b) => a + b,
    restar:(a, b) => a - b,
    multiplicar:(a, b) => a * b,
    dividir: (a, b) => a / b,
    isNull: () => null,
    isFalse : () => false,
    isTrue : () => true,
    isUndefined : () => undefined
};
module.exports = operaciones;