import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';
import Crat from '../Crat/Crat';
import './Shop.css' ;
const Shop = () => {
    const [products , setProducts] = useState ([]);
    const [cart , setCart] = useState([]) 
    useEffect (()=> {
        fetch ('products.json')
        .then (res => res.json())
        .then (data=> setProducts (data)) ;
    },[])
    const addToCart = (product) => {
        // console.log (product) ;
        const newCart = [...cart , product] ;
        setCart (newCart) ;
   ;
    }
    return (
        <div className='shop-container'>
          <div className="products-container">
              {
                  products.map (product => <Product
                     key = {product.id}
                     product={product}
                     addToCart = {addToCart}
                     ></Product>)
              }
          </div>
          <div className="cart-container">
             <Crat cart={cart}></Crat>
          </div>
        </div>
    );
};

export default Shop;