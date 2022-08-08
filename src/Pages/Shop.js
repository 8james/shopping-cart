import ShopData from '../ShopData'
import ProductsCard from "../Components/ProductsCard";
import '../styles/shop.css'

const Shop = (props) => {
    
  const displayItems = ShopData.map(item => {
      return(
          <ProductsCard
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
      )
  })
    return (
        <div className='shop' data-testid='shopdiv'>
            {displayItems}
        </div>
        
    )
}
export default Shop;