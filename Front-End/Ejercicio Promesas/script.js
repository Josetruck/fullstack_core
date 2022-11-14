function buscar(){
var name = document.getElementById("user").value;
fetch(`https://api.github.com/users/${name}`)
.then(res=>res.json())
.then(json=>{console.log(json.name); 
    console.log(json.public_repos);
    const name = json.name;
    const nombre = document.createElement("p");
    const salto = document.createElement("br");
    const contenido = document.createTextNode("Nombre del usuario:"+ name);
    nombre.appendChild(contenido);
    document.body.appendChild(nombre)
    console.log(json.avatar_url);
    const image = document.createElement("img");
    image.src = json.avatar_url;
    image.height = 180
    document.body.appendChild(image);
    const repos = json.public_repos;
    const repositorios = document.createElement("p");
    const contenidorepo = document.createTextNode("Repositorios publicados:"+ repos + "\n");
    repositorios.appendChild(contenidorepo);
    document.body.appendChild(repositorios)
});

}
