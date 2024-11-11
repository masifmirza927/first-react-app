
import Child from "./Child"

function App() {
    const name = "saleem";

    const getCity = (city) => {
        console.log(`myCity: ${city}`);
    }
    return ( 
        <div>
            <h1>Hello {name}</h1>
            {/* <div><button onClick={ () => { getCity("Karachi") }  } >Get City Btn</button></div> */}
            <Child getCity={getCity} name={name} />
        </div>
    )
}

export default App