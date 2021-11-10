import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import TicTacToe from "./components/games/TicTacToe";
import Hangmanb from "./components/games/Hangman";
import Sudoku from "./components/games/Sudoku";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
