import React from 'react';
import Cart from '../Cart';

const Shop = () => {
    return (
        <div>
            <h1>im from shop</h1>
           <div className="product"></div>
           <div className="cart">
               <Cart/>
           </div>

        </div>
    );
};

export default Shop;