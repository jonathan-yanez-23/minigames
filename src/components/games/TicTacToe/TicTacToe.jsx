import { useEffect, useState } from "react";
import Box from "./Box/Box";
import "./TicTacToe.css";

// Action types para reutilizarlos



function TicTacToe(props) {  
    const [turn, setTurn] = useState("X"); // Turno de X por defecto
    const [isStarted, setIsStarted] = useState(false) // La partida aun no ha comenzado
    const [boxes, setBoxes] = useState([[null,null,null],[null,null,null],[null,null,null]]);

    // Controlar cambios de estado de boxes
    useEffect(() => {
        // comprobar si la partida ha comenzado
        if (!isStarted) {
            console.log("partida no comenzada");
            return;
        }


        // 1. Comprobar si hay ganador (se mira el turno anterior)
        const posibleWinner = (turn === "X") ? "Y" : "X";
        let result = false;
        // Comprobar primera fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes[0].join("");
        // Comprobar segunda fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes[1].join("");
        // Comprobar tercera fila
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes[2].join("");
        // Check columna 1
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes.map(row => row[0]).join("");
        // Check columan 2
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes.map(row => row[1]).join("");
        // Check columna 3
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("")  === boxes.map(row => row[2]).join("");
        //Check diagonal 1
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("") === [boxes[0][0],boxes[1][1],boxes[2][2]].join("");
        //Check diagonal 2
        result = result || [posibleWinner,posibleWinner,posibleWinner].join("") === [boxes[0][2],boxes[1][1],boxes[2][0]].join("");

        if(result) { // Hay un ganador
            alert("EL GANADOR ES: "+posibleWinner);
            // Resetear el juego
            return;
        }

        // 2. Si todas las casillas estan llenas, se termina el juego
        let isNullsInRows = boxes.map(row => row.includes(null));
        if(!isNullsInRows.includes(true)){
            alert("LAS CASILLAS ESTAN LLENAS Y NO HAY GANADOR");
            // Resetear el juego
        }
    }, [boxes]);
    

    const handleBoxInsert = function(row, column) {
        let rowNumber = parseInt(row);
        let columnNumber = parseInt(column);
        if (!boxes[rowNumber][columnNumber]){
            boxes[rowNumber][columnNumber] = turn;
            // modifico la caja con su funcion
            setBoxes([...boxes])
        
            // modifico el turno con su funcion
            setTurn( (turn=="X") ? "Y": "X");
            
        } else {
            console.log("NO SE PUEDE LLENAR ESTA CASILLA");
        }
    }

    const initPlay = function() {
        setIsStarted(true);
        // Resetear todo
    }

    const stopPlay = function() {
        setIsStarted(false);
        // Resetear todo
    }

    return (
        <div className="tictactoe">
            <h1>TICTACTOE GAME</h1>
            {(!isStarted) ? (
                <button className="controlButton" onClick={initPlay}>
                    COMENZAR PARTIDA
                </button>
            ): null}

            <div className="matrixBoxes">
                <div className="row1">
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"0"} colbox={"0"} ></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"0"} colbox={"1"}></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"0"} colbox={"2"}></Box>
                </div>
                <div className="row2">
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"1"} colbox={"0"}></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"1"} colbox={"1"}></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"1"} colbox={"2"}></Box>
                </div>
                <div className="row3">
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"2"} colbox={"0"}></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"2"} colbox={"1"}></Box>
                    <Box isStarted={isStarted} handleBoxInsert={handleBoxInsert} turn={turn} rowbox={"2"} colbox={"2"}></Box>
                </div>
            </div>

            {(isStarted) ? (
                <button className="controlButton" onClick={stopPlay}>
                    PARAR PARTIDA
                </button>
            ): null}

            {(isStarted) ? (
                <p>Turno de {turn}</p>
            ): null}
        </div>
    );
}
export default TicTacToe;