
import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props); //llama al constructor de Component. pa qe fucione
        this.state = { date: new Date() };
        if(props.ciudad){
            console.log(`Hay contenido en ${props.ciudad}`);    
        }
        console.log("Entro en el constructor");
    }
    //Montaje del componente
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        console.log("Entro en el componentDidMount");
    }
    //Metodo propio
    tick() {
        this.setState({
          date: new Date()
        });
      }
    //Desmontaje del componente
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("Entro en el componentWillUnmount");
    }
    render() {
        console.log("Entro en el render");
        return (
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        );
    }
}

export default Clock;
