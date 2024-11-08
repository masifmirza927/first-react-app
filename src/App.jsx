import "./App.css";

import Hello from "./Hello";

function App() {

    const getName = (name) => {
        alert(`hi ${name} from app`);
    }

    return (
        <div>
            <h1 style={{color:"red", backgroundColor: "gold"}}>Hello I am developer</h1>
            <p>Hello from para</p>
            {/* <button onClick={ () => { getName("Ali")  } } >Say Hi</button> */}
            <Hello getNameFunc={getName}  name="Shakeel" city="Karachi" /> 
        </div>
    )
}

export default App;