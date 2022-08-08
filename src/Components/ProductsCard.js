import { Link, BrowserRouter } from "react-router-dom"
import '../styles/card.css'


const ProductCard = (props) => {
    const { name , img, price, id} = props

    return(
        <Link to={`${id}`}>
            <div className="card">
                <img src={img} alt="product img" className="product-img"/>
                <h2>{name}</h2>
                <h3 className="card--price">$ {price}</h3>   
            </div>
        </Link>
    )
}

export default ProductCard;
