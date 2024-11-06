
import Hi from "./Hi"

function Hello(props) {
    //console.log(props.name);
    //console.log(name)
    return(
        <div>
            <h1>Hello, {props.name} you form {props.city}</h1>
            <Hi name={props.name} />
        </div>
    )
}

export default Hello