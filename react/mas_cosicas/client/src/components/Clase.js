import React from 'react';

class Clase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            edad: props.edad,
            nombre: props.nombre };
    }
    componentDidMount() {
        console.log("Montaje completo");
    }
    componentDidUpdate() {
        console.log("actualisa");
      }
    componentWillUnmount() {
        console.log("Blas que te vas");
    }

    render() {
        return <div><h1>Eeepa {this.props.nombre}</h1><h3>Estás mayor ya, tienes {this.props.edad}</h3></div>;
    }
}

export default Clase;