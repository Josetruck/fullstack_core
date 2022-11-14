
 var p1  =  fetch('https://opentdb.com/api.php?amount=1')
    .then(res=>res.json()).then((json)=>{console.log(json.results[0].category)})

var pregunta = JSON.parse(localStorage.getItem("pregunta"))[0].question;
var correcta= JSON.parse(localStorage.getItem("pregunta"))[0].correct_answer;
var respuestas = JSON.parse(localStorage.getItem("pregunta"))[0].answer;
var pregunta = JSON.parse(localStorage.getItem("pregunta"))[0].question;
var pregunta = JSON.parse(localStorage.getItem("pregunta"))[0].question;


console.log(pregunta)
