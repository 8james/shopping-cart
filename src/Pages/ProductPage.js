import { useParams } from "react-router-dom";
import ShopData from "../ShopData";
import '../styles/productpage.css'

const ProductPage = (props) => {
    const { addToCart } = props

    const { id } = useParams();

    let selectedItem;
    ShopData.forEach(item => {
        if(item.id === parseInt(id)){
            return selectedItem = item;
        }
    })
    
    return(
        <div className="product-page">
            <div>
                <img src={selectedItem.img} alt="product" className="product-page--image"/>
            </div>
            <div className="product-page--info">
                <h1 className="product-page-title">{selectedItem.name}</h1>
                <p className="product-page--price">${selectedItem.price}</p>
                <p className="product-page-description">{selectedItem.description}</p>
                <button onClick={()=>addToCart(selectedItem)} className="product-page--btn">add to cart</button>
            </div>
        </div>
    )

}

export default ProductPage;
