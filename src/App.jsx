import Child from "./Child"
import { useState } from "react";
import Scorecard from "./Scorecard";

function App() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    console.log(products);
    return (
        <div className="container">
            <button className="btn btn-warning" onClick={getProducts}>Get All Products</button>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-4" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top object-fit-cover" alt="..." style={{height: "250px"}} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default App