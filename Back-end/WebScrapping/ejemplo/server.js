
const puppeteer = require("puppeteer");

(async () => {
  // Si headless esta en true, se oculta el chromium
  const browser = await puppeteer.launch({
    headless: false,
  });

  // Es como abrir una nueva página/pestaña en el navegador
  const page = await browser.newPage();

  // Para ir a una página en concreto.
  await page.goto("http://www.amazon.es");

  // Para hacer click al mensaje de cookies.
  await page.click("#sp-cc-accept");

  //Acceder al buscador de amazon por su selector. ('Selector','Búsqueda').
  await page.type("#twotabsearchtextbox", "libros");

  //Click del botón de la búsqueda.
  await page.click(".nav-search-submit input");

  //Esperamos que se cargue la página, ya que sino no encuentra nada.
  await page.waitForTimeout(5000);

  //Recogemos en un array de las imágenes de los libros
  const urlImg = await page.$$eval("img.s-image", (urlImg) =>
    urlImg.map((img) => img.src)
  );

  //Recogemos en un array los títulos
  const titulos = await page.$$eval("h2 span", (titles) =>
    titles.map((title) => title.innerHTML)
  );

  //Recogemos en un array el precio
  const precios = await page.$$eval(".a-price-whole", (precios) =>
    precios.map((precio) => precio.innerHTML)
  );

  const arrayLibros = [];
  for (let i = 0; i < precios.length; i++) {
    const datosLibro = {
      titulo: titulos[i],
      img: urlImg[i],
      precio: precios[i],
    };
    arrayLibros.push(datosLibro);
  }
  console.log(arrayLibros);

  // //Se cierra el navegador
  // await browser.close();
})();
