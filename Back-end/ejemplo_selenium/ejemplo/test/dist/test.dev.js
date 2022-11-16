"use strict";

var _require = require("selenium-webdriver"),
    By = _require.By,
    Key = _require.Key,
    Builder = _require.Builder;

require("chromedriver");

function example() {
  var searchString, driver, button, title;
  return regeneratorRuntime.async(function example$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //Cadena que vamos a buscar en Google
          searchString = "Automatizar pruebas con Selenium y JavaScript"; //Esperamos a que se abra la ventana de Chrome

          _context.next = 3;
          return regeneratorRuntime.awrap(new Builder().forBrowser("chrome").build());

        case 3:
          driver = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(driver.get("http://google.com"));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(driver.findElement(By.xpath('//*[@id="L2AGLb"]/div')));

        case 8:
          button = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(button.click());

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap(driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(driver.getTitle());

        case 15:
          title = _context.sent;
          console.log('Title is:', title); //Cerramos el navegador
          //await driver.quit();

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

example();