import { useParams } from "react-router-dom";
import ShopData from "../ShopData";

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
             <h1>Product Page</h1>
            <img src={selectedItem.img} alt="product" className="product-page--image"/>
            <h1>{selectedItem.name}</h1>
            <h1>{selectedItem.price}</h1>
            <button onClick={()=>addToCart(selectedItem)}>add to cart</button>
        </div>
    )

}

export default ProductPage;
