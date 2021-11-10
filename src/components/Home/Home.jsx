import { Link } from "react-router-dom";
import "./Home.css";

function Home () {
    return (
        <div>
            <h1>BIENVENIDOS A MINIJUEGOS</h1>
            <div>
                <a href="/tictactoe">TIC TAC TOE</a>
            </div>
            <div>
                <a href="/hangout">HANGOUT</a>
            </div>

            <div>
                <Link to="/sudoku">SUDOKU</Link>
            </div>
        </div>
    );
}

export default Home;