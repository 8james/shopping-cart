import { fireEvent, render, screen } from "@testing-library/react"
import userEvent, { __esModule } from "@testing-library/user-event"
import Cart from "../Components/Cart"

const cart = [
    { name: 'item 1', price:10, id:1, quantity:1 }, 
    { name: 'item 2', price:5, id:2, quantity:2 }, 
    { name: 'item 3', price:7, id:3, quantity:1}, 
]

const incrementQuantity = jest.fn()
const decrementQuantity = jest.fn()

test("cart component will render", () => {
    render(<Cart cart={cart}/>)
    const cartDiv = screen.getByTestId('cartDiv');
    expect(cartDiv).toBeInTheDocument()
})

test("cart items  will rendered", () => {
    render(<Cart cart={cart}/>);
    const name = screen.getAllByText(/item/i);
    expect(name.length).toBe(3);
    expect(name[0].textContent).toBe('item 1');
    expect(name[1].textContent).toBe('item 2');
    expect(name[2].textContent).toBe('item 3');
});

test('total total price of cart will render correctly, $27', () => {
    render(<Cart cart={cart}/>)
    const total = screen.getByTestId('totalH3')
    expect(total.textContent).toBe('total: $27')

})

test('increment quantitiy function gets called when button is clicked', () => {
    render(<Cart cart={cart} const incrementQuantity={incrementQuantity}/>)
    const incBtn = screen.getAllByText('+')
    userEvent.click(incBtn[0]);
    expect(incrementQuantity).toBeCalledTimes(1)
})


test('decrement quantity function gets called when button is clicked', () => {
    render(<Cart cart={cart} decrementQuantity={decrementQuantity}/>)
    const decBtn = screen.getAllByText('-')
    userEvent.click(decBtn[0]);
    expect(decrementQuantity).toBeCalledTimes(1)
})

