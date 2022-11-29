import { useState } from "react";
import "./Accordion.css";


function Accordion() {
    const [showAnswer, setShowAnswer] = useState(false);
    console.log("Render component with showAnswer: ", showAnswer);

    let displayValue;
    if (showAnswer === true) {
        displayValue = "block";
    } else {
        displayValue = "none";
    }

    const handleButtonClick = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="accordionWrapper">
            <div className="question">Why is React great?
            <button onClick={handleButtonClick} type="button">+</button>
            </div>
            <div style={{ display: displayValue }} className="answer">Fast Learning Curve</div> </div>
    );
}

export default Accordion;