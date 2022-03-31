import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const {handleRemoveProduct , product} = props
    const {name , img , price , shipping , quantity} = product ;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
           <div className="review-item-details">
           <p className='product-name' title={name}>name: {name.length > 20 ? name.slice (20) + '...': name}</p>
           <p>Price: <small>${price}</small></p>
           <p>Shipping: <small>${shipping}</small></p>
           <p>Quantity: <small>{quantity}</small></p>
           </div>
           <div className="delete-btn-container">
                   <button onClick={()=>handleRemoveProduct(product)} className='delete-button'>
                       <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
               </div>
           </div>
        </div>
    );
};

export default ReviewItem;