import { Link } from "react-router-dom"
import '../styles/navbar.css'
import cartIcon from '../assets/shopping_cart.svg'
import bagIcon from '../assets/shopping_bag.svg'
function Nav(props){
    const { cart } = props
    return(
        <nav>
            <Link to='/'>
                <h1 className="logo">Dog Shop</h1>
            </Link>
            <div className="nav-left">
                <Link to='/shop'>
                    <div className="nav-btn">
                        <p>Shop</p>
                        <img src={bagIcon}/>
                    </div>
                </Link>
                <Link to='/cart'>
                    <div className="nav-btn">
                        <p className="nav-btn">Cart</p>
                        <img src={cartIcon}></img>
                        <div className="cart-badge">
                            {cart.length}
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}
export default Nav