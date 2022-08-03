import { fireEvent, render, screen } from "@testing-library/react"
import { __esModule } from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import App from '../App'

test("App component redners", () => {
    render(<App/>)
    const appDiv = screen.getByTestId('appDiv');
})