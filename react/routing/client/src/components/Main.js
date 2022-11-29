import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../pages/List";
import About from "../pages/About";
import Contact from "../pages/Contact";
class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Routes>
                <Route path="/list" element={<List />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        );
    }
}
export default Main;