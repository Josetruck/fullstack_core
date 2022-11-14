"use strict";

var operaciones = require('./calculadora');

describe('Operaciones matemáticas', function () {
  test('Realizamos la suma', function () {
    expect(operaciones.sumar(1, 1)).toBe(2);
  });
  test('Realizamos la resta', function () {
    expect(operaciones.restar(1, 1)).toBe(0);
  });
  test('Realizamos la multiplicacion', function () {
    expect(operaciones.multiplicar(1, 1)).toBe(1);
  });
  test('Realizamos la division', function () {
    expect(operaciones.dividir(1, 1)).toBe(1);
  });
});
describe('Matchers Boolean, Undefined o Null', function () {
  test('Resultado true', function () {
    expect(operaciones.isTrue()).toBeTruthy();
  });
  test('Resultado false', function () {
    expect(operaciones.isFalse()).toBeFalsy();
  });
  test('Resultado undefined', function () {
    expect(operaciones.isUndefined()).toBeUndefined();
  });
  test('Resultado null', function () {
    expect(operaciones.isNull()).toBeNull();
  });
});