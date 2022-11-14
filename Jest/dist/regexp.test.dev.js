"use strict";

var expReg = {
  responseOK: 'Response OK',
  responseFAIL: 'Response FAIL',
  email: 'test@test.com',
  telefono: '919784852'
};

var objExpReg = function objExpReg() {
  return expReg;
};

describe('Matchers Strings', function () {
  var exp = objExpReg();
  test('Comprobamos si la respuesta es correcta', function () {
    expect(exp.responseOK).toMatch(/OK/);
  });
  test('Comprobamos si la respuesta es incorrecta', function () {
    expect(exp.responseFAIL).toMatch(/FAIL/);
  });
  test('Comprobamos si la respuesta tiene una longitud', function () {
    expect(exp.responseFAIL).toHaveLength(13);
  });
  test('Comprobamos dirección de email', function () {
    expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/);
  });
  test('Comprobamos número de teléfono', function () {
    expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/);
  });
});