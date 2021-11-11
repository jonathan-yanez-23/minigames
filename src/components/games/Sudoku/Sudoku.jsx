import { useEffect } from "react";
import "./Sudoku.css";
function Sudoku(props) {
    useEffect(() => {
        console.log("COMPONENTE SUDOKU CREADO");
    }, []);
    return (
        <h1>SUDOKU</h1>
    );

}
export default Sudoku;