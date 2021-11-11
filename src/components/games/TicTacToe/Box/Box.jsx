import { useState } from "react";
import "./Box.css"


function Box(props) {
    const [state, setState] = useState({boxValue: null});
    const onClickEvent = function(e){

        // coordenadas
        let row = props.rowbox; 
        let col = props.colbox; 
        
        // compruebo si la casilla esta marcada
        if(state.boxValue != null){
            console.log("CASILLA MARCADA");
            return;
        } else { // Al handler para cambiar el estado

        }

    }
    return (
        <button onClick = {onClickEvent}>
            
        </button>
    )
}

export default Box;