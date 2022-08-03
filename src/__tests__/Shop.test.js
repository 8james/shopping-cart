import { fireEvent, render, screen } from "@testing-library/react"
import { __esModule } from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Shop from '../Pages/Shop'
import ProductsCard from '../Components/ProductsCard'


test("shopping component renders", ()=> {
    render(<BrowserRouter> <Shop/> </BrowserRouter>)
    const shopDiv = screen.getByTestId('shopdiv');
    expect(shopDiv).toBeInTheDocument();
})

test("prodcut card renders", () => {
    render(
        <BrowserRouter>
        <ProductsCard 
        name='test-name' 
        img=''
        price='5' 
        id='2'
        />
        </BrowserRouter>
        )
    const cardDiv = screen.getByText(/test-name/i)
    expect(cardDiv).toBeInTheDocument()
})
   
test("shopping component renders product title", ()=> {
    render(<BrowserRouter> <Shop/> </BrowserRouter>)
    const title = screen.getAllByAltText('product img');
})
