import { useEffect, useReducer } from "react";
import Box from "./Box/Box";
import "./TicTacToe.css";

const initialState = {
    turn: "X",
    isStarted: false,
    boxes: [[null,null,null],[null,null,null],[null,null,null]]
}
// Action types para reutilizarlos
const SET_TURN = "SET_TURN";
const SET_ISSTARTED = "SET_ISSTARTED";
const SET_BOXES = "SET_BOXES"

// Configurar reducer -> Recibe un state y un action, siempre
const reducer = (state, action) => {
    // Action contiene el type y el nuevo valor en payload
    const {type, payload} = action;

    //Dependiendo del type, se configura un valor u otro
    switch(type) {
        case SET_TURN:
            return {...state, turn: payload};
        case SET_ISSTARTED:
            return {...state, isStarted: !state.isStarted}; // Cambiar un booleano consiste en negar su anterior estado
        case SET_BOXES:
            return {...state, boxes: payload};
        default:
            return state;
    }
}


function TicTacToe(props) {
    const [state, dispatch] = useReducer(reducer, initialState);    

    // Controlar cambios de estado de boxes

    useEffect(() => {
        // 1. Comprobar si hay ganador (se mira el turno anterior)
        const posibleWinner = (state.turn === "X") ? "Y" : "X";
        let result = false;
        // Comprobar primera fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes[0].join("");
        // Comprobar segunda fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes[1].join("");
        // Comprobar tercera fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes[2].join("");
        // Check columna 1
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes.map(row => row[0]).join("");
        // Check columan 2
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes.map(row => row[1]).join("");
        // Check columna 3
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === state.boxes.map(row => row[2]).join("");
        //Check diagonal 1
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("") === [state.boxes[0][0],state.boxes[1][1],state.boxes[2][2]].join("");
        //Check diagonal 2
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("") === [state.boxes[0][2],state.boxes[1][1],state.boxes[2][0]].join("");

        if(result) { // Hay un ganador
            alert("EL GANADOR ES: "+posibleWinner);
            // Resetear el juego
            return;
        }

        // 2. Si todas las casillas estan llenas, se termina el juego
        let isNullsInRows = state.boxes.map(row => row.includes(null));
        if(isNullsInRows.includes(true)){
            alert("LAS CASILLAS ESTAN LLENAS Y NO HAY GANADOR");
            // Resetear el juego
        }
    }, [state.boxes]);
    
    const handleBoxInsert = function(row, column) {
        if (!state.boxes[row][column]){
            state.boxes[row][column] = state.turn;
        } else {
            console.log("NO SE PUEDE LLENAR ESTA CASILLA");
        }
    }



    return (
        <div className="tictactoe">
            <h1>TICTACTOE GAME</h1>
            <div className="matrixBoxes">
                <div className="row1">
                    <Box rowbox={"0"} colbox={"0"}></Box>
                    <Box rowbox={"0"} colbox={"1"}></Box>
                    <Box rowbox={"0"} colbox={"2"}></Box>
                </div>
                <div className="row2">
                    <Box rowbox={"1"} colbox={"0"}></Box>
                    <Box rowbox={"1"} colbox={"1"}></Box>
                    <Box rowbox={"1"} colbox={"2"}></Box>
                </div>
                <div className="row3">
                    <Box rowbox={"2"} colbox={"0"}></Box>
                    <Box rowbox={"2"} colbox={"1"}></Box>
                    <Box rowbox={"2"} colbox={"2"}></Box>
                </div>
            </div>
        </div>
    );
}
export default TicTacToe;