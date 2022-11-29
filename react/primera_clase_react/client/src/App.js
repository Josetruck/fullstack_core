import HolaMundo from './components/HolaMundo.js'
import './App.css';
import Welcome from './components/Welcome.js';

function App() {
  return (
    
    <div className="App">
    <HolaMundo nombre="Davinia" apellidos="de la Rosa Hernandez"></HolaMundo>
    <Welcome name="Davinia"/>
    <Welcome name="Coke"/>
    <Welcome name="Lydia"/>
    </div>
  );
}

export default App;
