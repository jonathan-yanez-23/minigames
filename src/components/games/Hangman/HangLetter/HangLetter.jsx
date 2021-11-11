import "./HangLetter.css"
function HangLetter(props) {
    return (
        <span className="hangLetterBox">
            {props.letterValue}
        </span>
    );
}

export default HangLetter;