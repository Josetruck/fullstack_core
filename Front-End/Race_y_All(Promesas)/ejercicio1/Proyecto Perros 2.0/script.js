
var p1 = fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(res => res.json())
    .then(json => {
        var listRaza;
        listRaza = json.message;
        console.log(listRaza);
        etiqueta = document.createElement("p");
        texto = document.createTextNode(JSON.stringify(listRaza));
        etiqueta.appendChild(texto);
        document.body.appendChild(etiqueta)
    });

var p2 = fetch(`https://dog.ceo/api/breed/${prompt("introduzca una raza")}/images/random`)
    .then(res => res.json())
    .then(img => {
        var imgRandom;
        imgRandom = img.message;
        muestra = document.getElementById("random");
        muestra.src = imgRandom
        console.log(imgRandom);
    });

var p3 = fetch(`https://dog.ceo/api/breed/${prompt("introduzca una raza")}/images`)
    .then(res => res.json())
    .then(todo => {
        var imgList;
        imgList = todo.message;
        console.log(imgList);
        imgList.forEach((element, i) => {
            imgall = document.createElement("img");
            imgall.src = imgList[i];
            imgall.id = `img${i}`;
            imgall.width = 50;
            imgall.heigth = 50;
            document.body.appendChild(imgall)
        });
    });
