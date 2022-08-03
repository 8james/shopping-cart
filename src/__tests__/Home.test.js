import { fireEvent, render, screen } from "@testing-library/react"
import { __esModule } from "@testing-library/user-event"
import Home from '../Pages/Home'

test('homepage renders', ()=> {
    render(<Home/>)
    const homeText = screen.getByText(/home/i)
    expect(homeText).toBeInTheDocument();
})
