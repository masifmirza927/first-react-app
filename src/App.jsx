import "./App.css";

import Hello from "./Hello";
import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const getName = (name) => {
        alert(`hi ${name} from app`);
    }

    const increaseScore = () => {
        setScore( score + 1 )
    }
    const decreaseScore = () => {
        setScore( score - 1 )
    }

    return (
        <div>
            <h1 style={{color:"red", backgroundColor: "gold"}}>Score: {score}</h1>
            <button onClick={ increaseScore }>Increment</button>
            <button onClick={ decreaseScore }> Decrement</button>
            {/* <button onClick={ () => { getName("Ali")  } } >Say Hi</button> */}
            <Hello getNameFunc={getName}  score={score} city="Karachi" /> 
        </div>
    )
}

export default App;