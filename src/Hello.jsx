
import Crab from "./images/img1.jpg";

function Hello() {
    
const name  = "Saif";
const a = 5;
const b = 5;
const isLogin = true;

    return(
        <div>
            <h1 className="heading">
                {
                    (isLogin == true) ? "Welcome Saif": "Welcome Guest"
                }
            </h1>
            <img src={Crab} width="300px" />
            <label htmlFor="myName">My Name</label>
            <input type="text" id="myName" />
        </div>
    )
}

export default Hello;