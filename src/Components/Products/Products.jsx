import React from 'react';
import'./Products.css'
const Products = (props) => {
    console.log(props);
    const {price,name,id,picture} = props.pd;

    return (
        <div className='products'>
            <img src={picture}/>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default Products;