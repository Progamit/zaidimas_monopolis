import React, {useEffect, useState} from 'react';
import SingleProduct from "./SingleProduct";

const ProductsPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            })

    }, [])

    return (
        <div className="d-flex wrap">
            {products.map(x => <SingleProduct product={x} key={x.id}/>)}
        </div>
    );
};

export default ProductsPage;
