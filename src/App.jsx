import Child from "./Child"

import {useState} from "react";
import Scorecard from "./Scorecard";

function App() {
    const [score, setScore] = useState(0);
console.log("re run");


    return ( 
        <div>
           <h1>Score {score}</h1>
            <button onClick={ () => { setScore(6) } } >Six</button>
            
            {/* <div><button onClick={ () => { getCity("Karachi") }  } >Get City Btn</button></div> */}
            {/* <Child getCity={getCity} name={name} /> */}
            <Scorecard score={score} />
        </div>
    )
}

export default App