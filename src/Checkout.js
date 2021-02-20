import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
//import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className='checkout_ad' src="https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg" 
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item. 
                        </p>
                    </div>
                ) : (
                    
                    <div className="checkout_title">
                        <h3>Hello, {user.email}</h3>
                        <h2>Your Shopping Basket</h2>


                        {basket.map(item => (
                            <CheckoutProduct 
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating} />
                        ))}
                    </div>
                )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
        </div>
        
            
        
        
    );

}

export default Checkout;
