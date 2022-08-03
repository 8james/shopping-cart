import { Link } from "react-router-dom"
function Nav(props){
    const { cart } = props
    return(
        <nav>
            <Link to='/'>
                <h1 className="logo">Logo</h1>
            </Link>
            
            <ul>
                <Link to='/shop'>
                    <li className="nav-btn">Shop</li>
                </Link>
                <Link to='/cart'>
                    <li className="nav-btn">Cart {cart.length}</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav