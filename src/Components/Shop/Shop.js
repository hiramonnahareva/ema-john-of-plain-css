import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Components/Product/Product';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css' ;
const Shop = () => {
    const [products , setProducts] = useProducts() ;
    const [cart , setCart] = useState([]) 
    useEffect(() => {
        const storedCart = getStoredCart() ;
        const saveCart = [] ;
        // console.log (storedCart) ;
        for (const id in storedCart) {
            const addProduct = products.find (product => product.id === id)
            if (addProduct){
                const quantity = storedCart[id] ;
                addProduct.quantity = quantity ;
                saveCart.push (addProduct) ;
            //     console.log (addProduct) ;
            // console.log (addProduct) ;
            }
        }
        setCart(saveCart)
    } , [products])
    const addToCart = (selecteProduct) => {
        let newCart = [] ;
        // console.log (product) ;
        const exists = cart.find (product => product.id === selecteProduct.id) ;
        if (!exists){
            selecteProduct.quantity = 1 ;
            newCart = [...cart , selecteProduct] ;
        }
        else {
            const rest = cart.filter (product => product.id !== selecteProduct.id) ;
            exists.quantity = exists.quantity + 1 ;
            newCart = [...rest , exists] ;
        }
        setCart (newCart) ;
        addToDb (selecteProduct.id)
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
             <Cart cart={cart}>
             <button className='detele-btn'>
                        Clear Cart
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
             <Link className='link-btn' to='/orders'>
                 <button className='checkout-btn'>
                     Review Order
                     <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                     </button>
             </Link>
             </Cart>
          </div>
        </div>
    );
};

export default Shop;