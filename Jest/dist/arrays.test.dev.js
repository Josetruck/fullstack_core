"use strict";

var provincias = ['Álava', 'Badajoz', 'Cáceres', 'Girona', 'Huelva', 'Jaén', 'La Rioja', 'Madrid', 'Navarra'];
var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

var arrProvincias = function arrProvincias() {
  return provincias;
};

var arrDias = function arrDias() {
  return dias;
};

describe('Matchers Arrays', function () {
  test('Madrid existe en el array', function () {
    expect(arrProvincias()).toContain('Madrid');
  });
  test('Guadalajara no existe en el array', function () {
    expect(arrProvincias()).not.toContain('Guadalajara');
  });
  test('El array semana tiene 9 elementos', function () {
    expect(arrDias()).toHaveLength(7);
  });
});