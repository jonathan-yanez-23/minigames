import { Link } from "react-router-dom";
import "./Home.css";

function Home () {
    return (
        <div>
            <h1>BIENVENIDOS A MINIJUEGOS</h1>
            <div>
                <Link to="/tictactoe">TIC TAC TOE</Link>
            </div>
            <div>
                <Link to="/hangman">HANGOUT</Link>
            </div>
            <div>
                <Link to="/sudoku">SUDOKU</Link>
            </div>
        </div>
    );
}

export default Home;