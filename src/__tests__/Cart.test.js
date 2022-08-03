import { fireEvent, render, screen } from "@testing-library/react"
import { __esModule } from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Components/Cart"
import App from '../App'

test("cart component will render", () => {
    render(<Cart/>)
    const cart = screen.getByTestId('cartDiv');
    expect(cart).toBeInTheDocument()
})

/*test("cart items  will render", () => {
    const fake = [{
        name:name,
        price:1,
        id:1,
    }]
    render(<Cart cart={fake}/>)


})*/




