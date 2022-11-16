
const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


async function example() {
    //Cadena que vamos a buscar en Google
    var searchString = "Automatizar pruebas con Selenium y JavaScript";

    //Esperamos a que se abra la ventana de Chrome
    let driver = await new Builder().forBrowser("chrome").build();

    //Accedemos a google.com en una petición get
    await driver.get("http://google.com");

    //Pulsamos en el botón aceptar de la ventana que nos aparece inicialmente
    let button = await driver.findElement(By.xpath('//*[@id="L2AGLb"]/div'));
    await button.click();

    //Escribimos en la búsqueda y pulsamos enter
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

    //Mostramos el título de la página
    var title = await driver.getTitle();
    console.log('Title is:', title);

    //Cerramos el navegador
    //await driver.quit();

}

example();
