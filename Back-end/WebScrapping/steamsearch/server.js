
const puppeteer = require("puppeteer");

const pug = require('pug');
const express  = require('express');
const app = express();

// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', '.');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

app.get('/', (req, res) => {

(async () => {
  // Si headless esta en true, se oculta el chromium
  const browser = await puppeteer.launch({
    headless: false,
  });

  // Es como abrir una nueva página/pestaña en el navegador
  const page = await browser.newPage();

  // Para ir a una página en concreto.
  await page.goto("https://store.steampowered.com/search/");

  // Para hacer click al mensaje de cookies.
  // await page.click("#acceptAllButton");

  //Acceder al buscador de amazon por su selector. ('Selector','Búsqueda').
  await page.type("#term", "RV");

  //Click del botón de la búsqueda.
  // page.mainFrame().waitForSelector('.btnv6_blue_hoverfade').then(() => page.click(".btnv6_blue_hoverfade"));
  await page.click(".btnv6_blue_hoverfade");
  //Esperamos que se cargue la página, ya que sino no encuentra nada.
  await page.waitForTimeout(5000);

  //Recogemos en un array de las imágenes de los libros
  const urlImg = await page.$$eval(".search_capsule img", (urlImg) =>
    urlImg.map((img) => img.src)
  );
  console.log(urlImg)

  //Recogemos en un array los títulos
  const titulos = await page.$$eval(".search_name .title", (titles) =>
    titles.map((title) => title.innerHTML)
  );
  console.log(titulos)
  //Recogemos en un array el precio
  //const precios = await page.$$eval(".search_price_discount_combined")
  
  const precios = await page.$$eval(".search_price", (precio) =>
  precio.map((n) => n.innerHTML)
);
  console.log(precios)
  const arrayJuegos = [];
  for (let i = 0; i < precios.length; i++) {
    const datosJuego = {
      titulo: titulos[i],
      img: urlImg[i],
      precio: precios[i],
    };
    arrayJuegos.push(datosJuego);
  }
  console.log(arrayJuegos);
  let index = Math.floor(Math.random() * (10 - 0) + 1)
  res.render('index.pug', {title:arrayJuegos[index].titulo, src:arrayJuegos[index].img, precio:arrayJuegos[index].precio, array:arrayJuegos}); // Se muestra la plantilla view.pug

  // //Se cierra el navegador
  await browser.close();
})();

});

app.listen(3000);