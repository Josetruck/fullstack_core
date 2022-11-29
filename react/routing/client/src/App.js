import React, { Component } from "react";
import { BrowserRouter ,Link } from "react-router-dom";
import MainComponent from "./components/Main";
import "./App.css"

class App extends Component {


render() {
    return (
        <BrowserRouter>
            <div className="App">
                ESTE ES EL COMPONENTE PADRE APP
                <Link to={"/about"}>About</Link>
                <Link to={"/list"}>List</Link>
                <Link to={"/contact"}>Contact</Link>
                <MainComponent />
            </div>
        </BrowserRouter>
    );
}
}
export default App;