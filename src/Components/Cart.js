import { useEffect, useState } from "react";

const Cart = (props) => {
    const { cart, updateQuantity, incrementQuantity, decrementQuantity } = props
    const [total, setTotal] = useState()

    useEffect(() => {
        let totalValue = 0;
        cart.forEach(item => totalValue += item.price * item.quantity)
        setTotal(totalValue)
    }, [cart])

    const displayCart = cart.map(item => {
        return( 
            <div className="cart-item" data-testid='cartDiv'>
                <h1 key={item.id}>{item.name} ${item.price}</h1>
                <h3> quantity: {item.quantity}</h3>
                <div>
                    <button className="quantity-btn" onClick={()=> decrementQuantity(item)}>-</button>
                    <input 
                        type="number" 
                        className="quantity" 
                        name="quantity" 
                        onChange={(e) => updateQuantity(e, item)} 
                        value={item.quantity} 
                        min='1'
                    />
                    <button className="quantity-btn" onClick={()=>incrementQuantity(item)}>+</button>
                 </div>
            </div>
        )
    });

    return(
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cart.length < 1 ? <h1>cart is empty</h1> : <div>{displayCart} </div>}
            <h3> total: ${total}</h3>
            <button>check out</button>
        </div>
    )
 };

 export default Cart;