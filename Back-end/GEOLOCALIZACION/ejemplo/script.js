/* if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        `Latitud: ${position.coords.latitude}\nLongitud: ${position.coords.longitude}`
      );
      let datos = `<h1>Aquí estás!</h1>
          <p>Lat: ${position.coords.latitude.toFixed(4)}</p>
          <p>Long: ${position.coords.longitude.toFixed(4)}</p>`;
      document.body.innerHTML = datos;
    });
  } else {
    console.warn("Tu navegador no soporta Geolocalización!! ");
  }
  
  navigator.geolocation.watchPosition(
    (position) => {
      console.log(`${position.coords.latitude}, ${position.coords.longitude}`);
    },
    (error) => {
      console.warn(`Error! - ${error}`);
    }
  ); */


  
const mapId = "map";                                       //* Id index del mapa
const initialCoordinates = [40.4169473, -3.7057172];       //* Cordenadas iniciales (Plaza Sol en Madrid [lat, lng])
const map = L.map(mapId).setView(initialCoordinates, 5);   //* const Map = (Nos inserta el mapa en el div "map").(Centrada en la cordenada inicial, Zoom = 5)
const TOKEN =
  "pk.eyJ1IjoiY2Nhc3RpbGxvMDZtYiIsImEiOiJja2k1eXpybXU3em1mMnRsNjNqajJ0YW12In0.aFQJlFDBDQeUpLHT4EiRYg";

  const MAPBOX_API = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${TOKEN}`;

  L.tileLayer(MAPBOX_API, {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: TOKEN,
  }).addTo(map);

  function searchCity() {
    let city = document.getElementById("cityName").value.toLowerCase();
    fetch("./coordenatesspain.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        let coordenatesCity =
         res.filter((cities) => cities.ciudad == city);
        //* Para gestionar un gran cambio del json.
        let cleanLat = coordenatesCity[0].latitud * 100;
        let cleanLon = coordenatesCity[0].longitud * 100;
        const plazaMayorCoordinates = [cleanLat, cleanLon];
        //* Añadir marcador de la ciudad solicitada en el div.
        L.marker(plazaMayorCoordinates).bindPopup(`${city} : lat:${cleanLat} long: ${cleanLon}`).addTo(map);
      });}