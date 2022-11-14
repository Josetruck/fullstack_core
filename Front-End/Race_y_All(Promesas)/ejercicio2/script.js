const user=["parvovirus","josetruck","gmirg","Grons"];
var mapped = user.map((nombre)=>
fetch(`https://api.github.com/users/${nombre}`));
console.log(mapped);
Promise.all(mapped)
  .then(responses => {
    // todas las respuestas son resueltas satisfactoriamente
    console.log(responses)
    return responses;
  })
  // mapea el array de resultados dentro de un array de response.json() para leer sus contenidos
  .then(responses => Promise.all(responses.map(r =>r.json())))
  // todas las respuestas JSON son analizadas: "users" es el array de ellas
  .then(users =>{ users.forEach(user => {console.log(user.name);console.log(user.html_url)});
console.log(users)});