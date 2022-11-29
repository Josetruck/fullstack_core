import logo from './logo.svg';
import Clase from './components/Clase';
import Funcional from './components/Funcional';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Carga la página");
}, []);
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});



  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input placeholder="Nombre" type="text" onChange={(e)=>setNombre(e.target.value)}/>
      <input placeholder="Edad" type="text" onChange={(e)=>setEdad(e.target.value)}/>
      <Clase nombre={nombre} edad={edad}/>
    </div>
  );
}

export default App;
