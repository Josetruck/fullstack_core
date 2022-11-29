
import React, { useState, useEffect } from "react";
import '../App.css'
import Popup from "./Popup";
import useSound from "use-sound"
import sndOk from "../audios/sndOk.mp3"
import sndNo from "../audios/sndNo.mp3"
import sndLoad from "../audios/sndLoad.mp3"

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [gameState, setGameState] = useState("home")
  const [user, setUser] = useState("")
  const [storedScore, setStoredScore] = useState(false)
  const [top10, setTop10] = useState("")
  const [popup, setPopup] = useState("")


  const [playsndOk] = useSound(sndOk);
  const [playsndNo] = useSound(sndNo);
  const [playsndLoad] = useSound(sndLoad);



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
    playsndLoad();
    setCounter(0);
    setScore(0)
    setGameState("loading")
    setTimeout(() => {
      setGameState("game");
      setStoredScore(false);
    }, 8000)

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
        setPopup("ok")
        playsndOk();
      } else {
        setPopup("no")
        playsndNo();
      }
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
        setCounter(30)
        setPopup("")
      }, 2500)
    }
  }

  useEffect(() => {
    if (counter === 0) {
      setCounter(30)
      setCurrentQuestion(currentQuestion + 1)
    }
  })
  useEffect(() => {
    var stats = localStorage.storeScore
    if (stats) {
      stats = JSON.parse(stats)
      console.log(stats)
      var ordered = stats.sort(function (a, b) { return b.score - a.score })
      console.log(ordered)
      var top10 = ordered.slice(0, 10);
    }
    setTop10(top10)
  }, [storedScore])
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
    <div className="game">
      {popup === "ok"
        ? <Popup value="ok" /> : null}
      {popup === "no"
        ? <Popup value="no" /> : null}
      {gameState === "loading"
        ? <Popup value="loading" /> : null}
      {gameState === "home"
        ? <div className="home">
          <h1>Hackers Quiz</h1>
          <h3>Questions computer science</h3>
          <button onClick={() => newGame()}>Click Aqui para empezar</button>
        </div>
        : null}
      {gameState === "game" && currentQuestion < 10 && answers
        ? <div className="page">
          <div className="header">
            <h2>Hacker's Quiz</h2>
            <button onClick={() => setGameState("home")}>Finish Game</button>
          </div>
          <div className="card">
            <p className="lineaH">---------------------------------------------------------------------</p>
            <div className="upper"><p> Timer: {counter} segs</p> <p> Current Question: {currentQuestion}</p> <p> Score: {score}/10</p></div>
            <p className="lineaH">---------------------------------------------------------------------</p>
            <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestion] }} className="question"></h2>
            <div className="answers">
              <button className="A" onClick={() => check(0)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][0] }}></button>
              <button className="B" onClick={() => check(1)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][1] }}></button>
              <button className="C" onClick={() => check(2)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][2] }}></button>
              <button className="D" onClick={() => check(3)} dangerouslySetInnerHTML={{ __html: answers[currentQuestion][3] }}></button>
            </div>
          </div>
        </div>
        : null}
      {gameState === "finished"
        ? <div>
          <h1>Game Over</h1>
          <p>Your result: {score}/10</p>
          <button onClick={() => resetGame()}>Reset Game</button>
          <button onClick={() => setGameState("home")}>Home page</button>
        </div>
        : null}
      {!storedScore && gameState === "finished"
        ? <div><p>Insert your name: </p>
          <input type="text" onChange={(e) => setUser(e.target.value)} />
          <button onClick={() => saveScore()}>Guardar</button></div>
        : null}
      {gameState === "finished"
        ? <div className="scoretable">
          <h2 className="top10title">Top 10 Players</h2>
          <p className="lineaH">---------------------------------------------------------------------</p>
          <div className="scorerow"><h3>Name</h3><h3>Score</h3><h3>Date</h3></div>
          <p className="lineaH">---------------------------------------------------------------------</p>
        </div> : null}
      {gameState === "finished"
        ?
        top10.map((e, i) => {
          return <div className="scorerow"><h3>{e.user}</h3><p>{e.score}</p><p>{e.date}</p></div>
        })
        : null}
    </div>
  )
}
