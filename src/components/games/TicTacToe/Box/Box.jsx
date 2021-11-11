import { useState } from "react";
import "./Box.css"


function Box(props) {
    const [state, setState] = useState({boxValue: null});
    const onClickEvent = function(e){

        if(!props.isStarted){
            alert("AUN NO HAS COMENZADO LA PARTIDA");
            return;
        }
        // coordenadas
        let row = props.rowbox; 
        let col = props.colbox; 
        // compruebo si la casilla esta marcada
        if(state.boxValue != null){
            console.log("CASILLA MARCADA");
            return;
        } else { 
            // Cambio estado de Box
            setState({boxValue: props.turn});
            // lanzamos un handle para que se cambie el estado en el componente padre
            props.handleBoxInsert(row, col);
            // Lenamos la casilla
            e.target.textContent = props.turn;
            
        }

    }
    return (
        <button onClick = {onClickEvent}>
            <span></span>
        </button>
    )
}

export default Box;