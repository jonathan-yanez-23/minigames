import {useEffect, useState} from "react";
import FailLetter from "./FailLetter/FailLetter";
import HangLetter from "./HangLetter/HangLetter";
import AvaLetter from "./AvaLetter/AvaLetter";
import TitleTries from "./TitleTries/TitleTries"
import "./Hangman.css";


// lista de palabras
const WORD_LIST = ["CASA", "ALTAVOZ", "ABEDUL",
                    "GATO", "BOLIGRAFO", "PASTEL",
                    "TERMINAL", "ORDENADOR", "AVION",
                    "AVESTRUZ", "CARAMELO", "ZOOLOGICO",
                    "MATEMATICAS", "GIMNASIO", "GOLOSINA"
                ]

function Hangman(props) {
    const [tries, setTries] = useState(10); // Numero de intentos que siempre sera 10
    const [hangLetters, setHangLetters] = useState([]); // Letras del ahoracado, si esta vacio es que esa letra aun no ha sido adivinada
    const [failLetters, setFailLetters] = useState([]); // Letras fallidas, tantas como numeros de intentos haya
    const [availableLetters, setAvailableLetters] = useState("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split('')); // Todas las letras disponibles, inicialmente son todas las del abecedario
    const [selectedWord, setSelectedWord] = useState([]); // Array con las letras del ahorcado, hangLetters y selectedWord tendran el mismo tamaño

    // Funciones que se van a necesitar en el render (return)
    const startPlay = () => {
        // Resetea todo 
        // 1. escoger una palabra
        
        let randomPosition = Math.floor(1 + Math.random() * (14 - 1));
        setSelectedWord(WORD_LIST[randomPosition].split('')); // Array de letras
        console.log("startPlay > WORD_LIST[random]: "+WORD_LIST[randomPosition]);
        console.log("SELECTED WORD: "+selectedWord);

        // Establecer los valores del resto de estados
        setHangLetters(selectedWord.map(() => "_")); // Palabras en blanco
        setTries(10); 
        setAvailableLetters("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split(''));
        setFailLetters([]);

    }


    // Funcion click para las letras, cada vez que se pulse una, se elimina
    const onClickAvaLetter = (e) => {
        if(tries == 0){
            alert("NO HAY MAS INTENTOS, INICIA DE NUEVO PARA JUGAR CON OTRA PALABRA");
            return;
        }
        // Reducir en 1 los intentos.
        setTries(tries - 1);
        // Capturar la letra
        let letter = e.target.textContent;

        // Se quita la letra de palabras disponibles
        let newAvaLetters = availableLetters.filter(l => l != letter);
        setAvailableLetters([...newAvaLetters]);

        //Comprobar si la letra esta dentro de la palabra y mapear a hangLetters en caso afirmativo
        let inside = false;
        selectedWord.forEach((currentValue, index) => {
            if(currentValue == letter){
                inside = true;
                hangLetters[index] = letter;
            }
        });

        console.log("onClickAvaLetters>HANGLETTERS: "+ hangLetters)

        // Si la letra ha sido correcta, se modifica el hangLetters con su setter y se sale de esta funcion
        if(inside) {
            setHangLetters(hangLetters);
            return;
        }

        // Si la letra no formaba parte de la palabra, se añade a failletters
        failLetters.push(letter);
        setFailLetters([...failLetters]);
    }

    return (
        <div className="hangman">
            <h1>HANGMAN GAME</h1>
            <button className="startPlay" onClick={startPlay}>START PLAY</button>
            <TitleTries tries={tries}></TitleTries>
            <h2>Palabra: </h2>
            <div className="hangLetters">
            {
                hangLetters.map(letter => 
                    (<HangLetter letterValue={letter}></HangLetter>)
                )
            }
            </div>

            <h2>Available letters</h2>
            <div className="availableLetters">
                {
                    availableLetters.map(letter =>
                        (<AvaLetter onClick={onClickAvaLetter} letterValue={letter}></AvaLetter>)
                    )
                }
            </div>

            <h2>Fail letters</h2>
            <div className="failLetters">
                {
                    failLetters.map(
                        letter => 
                        (<FailLetter letterValue={letter}></FailLetter>)
                    )
                }
            </div>

        </div>
    );
}
export default Hangman;