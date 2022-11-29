//importar React y los elementos useState y useEffect.
import React, { useState, useEffect } from "react";
import Welcome from './Welcome';

//Componente Clase
function Tercero() {

    // Estados para el nombre, la edad e info.
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [info, setInfo] = useState("");

    // Está a la espera de cualquier cambio que haya en nombre.
    useEffect(() => {
        if (nombre != ""){
            console.log(`${nombre}`)
        } 
    }, [nombre]);

    // Está a la espera de cualquier cambio que haya en edad.
    useEffect(() => {
        if (edad != ""){
            console.log(edad);
        } 
    }, [edad]);

    useEffect(() => {
        console.log("Carga la página");
    }, []);

    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(`Su nombre es ${nombre} y tienes ${edad}`);

        // Guarda nombre y edad en el estado de info.
        setInfo([nombre, edad]);
    }

    return (
        <div>
            <Welcome name={nombre}/>
            {/* Inputs donde se recogelos valores si hay un cambio, y se mete al state. */}
            <input type="text" className="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            <input type="text" className="edad" placeholder="Edad" onChange={(e) => setEdad(e.target.value)} />

            <p><span>(e.target.value)</span></p>

            {/* Cuando se aprieta al botón dicha función recoge los valores de los states nombre y edad y los mete en info */}
            <input type="button" value="Enviar" className="boton" onClick={() => enviar()} />

            {/* En caso de que exista info se pintará el párrafo con la información del user.*/}
            {info ? <p> Hola {info[0]}, tienes {info[1]}</p> : ""}
        </div>
    )
}

//Exportar el componente
export default Tercero;