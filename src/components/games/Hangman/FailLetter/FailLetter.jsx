import "./FailLetter.css"
function FailLetter(props) {
    return (
        <span className="failLetterBox">
            {props.letterValue}
        </span>
    );
}

export default FailLetter;