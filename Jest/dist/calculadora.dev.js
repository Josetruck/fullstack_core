"use strict";

var operaciones = {
  sumar: function sumar(a, b) {
    return a + b;
  },
  restar: function restar(a, b) {
    return a - b;
  },
  multiplicar: function multiplicar(a, b) {
    return a * b;
  },
  dividir: function dividir(a, b) {
    return a / b;
  },
  isNull: function isNull() {
    return null;
  },
  isFalse: function isFalse() {
    return false;
  },
  isTrue: function isTrue() {
    return true;
  },
  isUndefined: function isUndefined() {
    return undefined;
  }
};
module.exports = operaciones;