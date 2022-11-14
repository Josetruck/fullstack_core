
    const operaciones = require('./calculadora');

    describe('Operaciones matemáticas', () => {
        test('Realizamos la suma', () => {
            expect(operaciones.sumar(1,1)).toBe(2);
        });
        test('Realizamos la resta', () => {
            expect(operaciones.restar(1,1)).toBe(0);
        });
        test('Realizamos la multiplicacion', () => {
            expect(operaciones.multiplicar(1,1)).toBe(1);
        });
        test('Realizamos la division', () => {
            expect(operaciones.dividir(1,1)).toBe(1);
        });
    });

    describe('Matchers Boolean, Undefined o Null', () => {
        test('Resultado true', () => {
            expect(operaciones.isTrue()).toBeTruthy();
        });
        test('Resultado false', () => {
            expect(operaciones.isFalse()).toBeFalsy();
        });
        test('Resultado undefined', () => {
            expect(operaciones.isUndefined()).toBeUndefined();
        });
        test('Resultado null', () => {
            expect(operaciones.isNull()).toBeNull();
        });
    });