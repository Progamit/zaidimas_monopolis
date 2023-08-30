import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleProduct = ({product}) => {

    const nav = useNavigate()

    function goToSingle() {
        nav("/product/"+product.id)
    }


    return (
        <div className="prod" onClick={goToSingle}>
            <img src={product.thumbnail} alt=""/>
            <p>{product.title}</p>
        </div>
    );
};

export default SingleProduct;


