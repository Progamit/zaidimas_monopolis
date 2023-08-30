import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const SingleProductPage = () => {

    const [product, setProduct] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        fetch("https://dummyjson.com/products/"+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })

    }, [])

    return (


        <div>
            {product && <div className="d-flex">
                <div className="grow1">
                    <img src={product.thumbnail} alt=""/>
                </div>
                <div className="grow1">
                    <h1>{product.title}</h1>
                    <h2>Price: {product.price}</h2>
                </div>
            </div> }


        </div>

    );
};

export default SingleProductPage
