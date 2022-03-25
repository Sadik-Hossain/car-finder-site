import React from 'react';
import Cart from '../Cart/Cart';

import Products from '../Products/Products';

const Shop = () => {
    return (
        <div>
            <h1>im from shop</h1>
           <div className="product">
               <Products/>
           </div>
           <div className="cart">
               <Cart/>
           </div>

        </div>
    );
};

export default Shop;