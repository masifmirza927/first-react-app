import "./App.css";

import Hello from "./Hello";

function App() {
    return (
        <div>
            <h1 style={{color:"red", backgroundColor: "gold"}}>Hello I am developer</h1>
            <p>Hello from para</p>
            <Hello name="Shakeel" city="Karachi" /> 
        </div>
    )
}

export default App;