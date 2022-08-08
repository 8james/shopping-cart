import { useEffect, useState } from "react";
import '../styles/cart.css'
import addIcon from '../assets/add.svg'
import removeIcon from '../assets/remove.svg'

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
            <div className="cart-item" key={item.id}>
                <img src={item.img} className="cart-img"/>
                <div className="item-card-info">
                    <h2>{item.name}</h2>
                    <h3>${item.price}</h3>
                    <div className="quantity">
                        <button className="quantity-btn" onClick={()=> decrementQuantity(item)}><img src={removeIcon} className="icon"/></button>
                        <input 
                            type="number" 
                            className="quantity" 
                            name="quantity" 
                            onChange={(e) => updateQuantity(e, item)} 
                            value={item.quantity} 
                            min='1'
                        />
                        <button className="quantity-btn" onClick={()=>incrementQuantity(item)}><img src={addIcon} className="icon"/></button>
                    </div>
                 </div>
            </div>
        )
    });

    return(
        <div className="cart" data-testid='cartDiv'>
            <h1 className="cart--title">Your Shopping Cart</h1>
            {cart.length < 1 ? <p className="cart--empty">cart is empty</p> : 
            <div className="cart--full">{displayCart} <h3 data-testid='totalH3'>Total: ${total}</h3> <button>check out</button></div>}
        </div>
    )
 };

 export default Cart;