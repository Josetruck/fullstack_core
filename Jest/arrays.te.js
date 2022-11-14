const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const arrProvincias = () => provincias;
const arrDias = () => dias;

describe('Matchers Arrays', () => { 
    test('Madrid existe en el array', () => {
        expect(arrProvincias()).toContain('Madrid');
    });
    test('Guadalajara no existe en el array', () => {
        expect(arrProvincias()).not.toContain('Guadalajara');
    })
    test('El array semana tiene 9 elementos', () => {
        expect(arrDias()).toHaveLength(7);
    })
});