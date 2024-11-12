import Child from "./Child"
import { useState } from "react";
import Card from "./components/Card"

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = () => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false))
    }

    console.log(products);
    return (
        <div className="container">
            <button className="btn btn-warning" onClick={getProducts}>Get All Products</button>
            <div className="row">
                {
                    (loading == true) ? (<div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>) : null
                }

                {
                    products.map((product) => {
                        return (
                            <div className="col-md-4" key={product.id}>
                                <Card product={product} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default App