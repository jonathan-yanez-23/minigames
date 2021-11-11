import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import TicTacToe from "./components/games/TicTacToe";
import Sudoku from "./components/games/Sudoku";

import Hangman from "./components/games/Hangman";
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/tictactoe" element={<TicTacToe></TicTacToe>}></Route>
          <Route path="/hangman" element={<Hangman></Hangman>}></Route>
          <Route path="/sudoku" element={<Sudoku></Sudoku>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
