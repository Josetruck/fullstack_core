const hornoListo = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve('Beep! Horno Calentado!')
    }, 3000));
}

const preCalentarHorno = async () => {
    console.log('Pre calentar horno.');
    const respuesta = await hornoListo();
    console.log(respuesta);
}

// Definir las otras funciones
const obtenerPizzaFria = () => console.log('Obtener pizza.');
const abrirPizzaFria = () => console.log('Abrir pizza.');
const obtenerSartenPizza = () => console.log('Obtener sarten.');
const ponerPizzaSarten = () => console.log('Poner pizza en el sarten.');
const tomarRefresco = () => console.log('Tomar un refresco.');
const mirarTV = () => console.log('Ver la televisión.');

// Ahora llama a las funciones
preCalentarHorno();
obtenerPizzaFria();
abrirPizzaFria();
obtenerSartenPizza();
ponerPizzaSarten();
tomarRefresco();
mirarTV();