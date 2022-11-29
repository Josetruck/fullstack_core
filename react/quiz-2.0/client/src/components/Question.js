
import React, { useState, useEffect } from "react";
import '../App.css'


export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [gameState, setGameState] = useState("home")
  const [user, setUser] = useState("")
  const [storedScore, setStoredScore] = useState(false)
  const [top10, setTop10] = useState("")



  function newGame() {
    fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`) // amount = 10, esto trae 10 preguntas de la API
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("questions", JSON.stringify(json.results))
        var answers = json.results.map((e) => {
          let array = e.incorrect_answers;
          array.push(e.correct_answer)
          return array.sort(() => Math.random() - 0.5);
        })
        localStorage.setItem("answers", JSON.stringify(answers))
      })
    setCurrentQuestion(0);
    setCounter(0);
    setScore(0)
    setGameState("game");
    setStoredScore(false)
  }
  var answers
  var questions
  var correct_answer
  if (localStorage.questions) {
    answers = JSON.parse(localStorage.getItem("answers"))
    questions = JSON.parse(localStorage.getItem("questions")).map(e => e.question)
    correct_answer = JSON.parse(localStorage.getItem("questions")).map(e => e.correct_answer)
  }


  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const check = (e) => {
    if (currentQuestion < 10) {
      if (answers[currentQuestion][e] === correct_answer[currentQuestion]) {
        setScore(score + 1)
      }
      setCurrentQuestion(currentQuestion + 1)
      setCounter(30)
    }
  }

  useEffect(() => {
    if (counter === 0) {
      setCounter(30)
      setCurrentQuestion(currentQuestion + 1)
    }
  })
  useEffect(()=>{
    var stats = localStorage.storeScore
    if (stats) {
      stats = JSON.parse(stats)
      console.log(stats)
      var ordered = stats.sort(function(a, b){return b.score-a.score})
      console.log(ordered)
      var top10 = ordered.slice(0,10);
    }
    setTop10(top10)
  },[storedScore])
  useEffect(() => {
    if (currentQuestion > 9) {
      setGameState("finished")

    }
  }, [currentQuestion])

  function saveScore() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var storeScore = localStorage.storeScore
    let newscore = {
      "user": user,
      "score": score,
      "date": today
    }
    if (!storeScore && user.length > 2) {
      localStorage.setItem("storeScore", JSON.stringify([newscore]))
      setStoredScore(true)
    } else if (storeScore && user.length > 2) {
      storeScore = JSON.parse(storeScore)
      storeScore.push(newscore);
      localStorage.setItem("storeScore", JSON.stringify(storeScore))
      setStoredScore(true)
    } else {
      alert("El nombre tiene que tener al menos 3 caracteres")
    }
  }

  function resetGame() {
    localStorage.removeItem("questions")
    newGame()
    setTimeout(() => {
      setCurrentQuestion(0);
      setCounter(0);
      setScore(0)
      setGameState("game");
      setStoredScore(false)
    }, 2000)
  }

  return (
    <div className="question">
      {gameState === "home"
        ? <div>
          <button onClick={() => newGame()}>Click Aqui para empezar</button>
        </div>
        : null}
      {gameState === "game" && currentQuestion < 10 && answers
        ? <div>
          <p>Timer: {counter} segs ////  Current Question: {currentQuestion}  //// Score: {score}/10</p>
          <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestion] }}></h2>
          <div className="answers">
            <button onClick={() => check(0)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][0] }}></button>
            <button onClick={() => check(1)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][1] }}></button>
            <button onClick={() => check(2)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][2] }}></button>
            <button onClick={() => check(3)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][3] }}></button>
          </div>
        </div>
        : null}
      {gameState === "finished"
        ? <div>
          <h1>Game Over</h1>
          <p>Tu resultado en esta partida es de {score}.</p>
          <button onClick={() => resetGame()}>Reiniciar Juego</button>
        </div>
        : null}
      {!storedScore && gameState === "finished"
        ? <div><p>Introduce tu nombre para guardar la partida</p>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <button onClick={() => saveScore()}>Guardar</button></div>
        : null}
      { gameState === "finished"
      ?     <div className="scoretable">
        <h2>Top 10 Players</h2>
      <div className="scorerow"><h3>Name</h3><h3>Score</h3><h3>Date</h3></div>
      </div>:null}
        {gameState === "finished"
          ?
          top10.map((e, i) => {
            return <div className="scorerow"><h3>{e.user}</h3><p>{e.score}</p><p>{e.date}</p></div>
          })
          : null}
    </div>
  )
}
