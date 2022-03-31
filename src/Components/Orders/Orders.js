import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
   const [products , setProducts] = useProducts() ;
   const [cart , setCart] = useCart (products) ;
   const handleRemoveProduct = (product) => {
       const rest = cart.filter (pd => pd.id !== product.id) ;
      setCart (rest) ;
      removeFromDb (product.id) ;
   }
    return (
        <div className='shop-container'>
           <div className="review-item-container">
               {
                   cart.map (product => <ReviewItem
                   key = {product.id}
                     product = {product}
                     handleRemoveProduct ={handleRemoveProduct}
                     ></ReviewItem>)
               }
           </div>
           <div className='cart-container'>
               {
                   <Cart cart = {cart}>
                        <button className='detele-btn'>
                        Clear Cart
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                        </button>
                       <Link to='/shop'>
                        <button className='checkout-btn'>
                            Proceed Checkout
                        <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                        </Link>
                   </Cart>
               }
           </div>
        </div>
    );
};

export default Orders;