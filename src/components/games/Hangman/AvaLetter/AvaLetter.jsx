import "./AvaLetter.css"
function AvaLetter(props) {
    return (
        <button onClick={props.onClick} className="avaLetterBox">
            {props.letterValue}
        </button>
    );
}

export default AvaLetter;