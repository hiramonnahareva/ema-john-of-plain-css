import React from 'react';
import './Product.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product , addToCart}) => {
    const {img , name , price , seller , ratings} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>{price}</p>
            <p><small>seller; {seller}</small></p>
            <p>Ratings: {ratings}</p>
           </div>
           <button onClick={()=>addToCart(product)} className='btn-cart'>
                <p className='btn-text'><b>Add To Cart</b></p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
