function buscar(){
    var pokemonName=document.getElementById("pokemonName").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res=>res.json())
    .then((pokeStats)=>{
        console.log(pokeStats)
        localStorage.setItem("pokeStats",JSON.stringify(pokeStats))
        console.log(localStorage)
        var exp= JSON.parse(localStorage.getItem("pokeStats")).base_experience;
        var peso= JSON.parse(localStorage.getItem("pokeStats")).weight;
        var altura= JSON.parse(localStorage.getItem("pokeStats")).height;
    
        console.log("Experiencia: "+exp)
        console.log("peso: "+peso)
        console.log("alto: "+altura)
        var imagen=document.getElementById("icono");
        var url=JSON.parse(localStorage.getItem("pokeStats"))
        console.log(url.sprites.other.home.front_default)
        imagen.src=url.sprites.other.home.front_default
        location.reload
    })
}
const labels = [
    'EXP.',
    'Peso',
    'Altura',
];

const data = {
    labels: labels,
    datasets: [{
        label: JSON.parse(localStorage.getItem("pokeStats")).name,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: 
        [JSON.parse(localStorage.getItem("pokeStats")).base_experience,
        JSON.parse(localStorage.getItem("pokeStats")).weight ,
        JSON.parse(localStorage.getItem("pokeStats")).height]
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};


