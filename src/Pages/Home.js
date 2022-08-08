import '../styles/home.css'
const Home = () => {

    return(
        <div className="home">
            <div className='img-container'> 
            </div>

        <div className='card-section'>
            <div>
                <h1>Our Products</h1>
            </div>
            <div className='card-container'>
                <div className='home-card'>
                    <img src='https://cdn.shopify.com/s/files/1/1679/8139/products/IMG_4283_1024x1024.JPG?v=1537545294' className='card-img'/>
                    <h1>Dog T-shirts</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='home-card'>
                    <img src='https://m.media-amazon.com/images/I/71YZ8zsmxYL._AC_SY606_.jpg' className='card-img'/>
                    <h1>Dog Sunglasses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='home-card'>
                    <img src='https://assets.petco.com/petco/image/upload/f_auto,q_auto/3419510-center-1' className='card-img'/>
                    <h1>Dog Hats</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Home;