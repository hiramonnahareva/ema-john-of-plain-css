import React from 'react';

const Crat = (props) => {
    return (
        <div>
             <h4>Order Summery</h4>
              <p>card:{props.cart.length}</p>
        </div>
    );
};

export default Crat;