import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentNew />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <ApartmentNew />
        </BrowserRouter>
    )
    expect(screen.getByText("Add a New Apartment")).toBeInTheDocument()
  })
})
