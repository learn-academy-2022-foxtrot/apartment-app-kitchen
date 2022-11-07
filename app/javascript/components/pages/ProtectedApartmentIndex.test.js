import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentIndex from "./ApartmentIndex"
import mockApt from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ProtectedApartmentIndex />, div)
  })

  it("renders without crashing", () => {
    

    render(
      <BrowserRouter>
        <ProtectedApartmentIndex apartments={mockApt}/>
      </BrowserRouter>
    )

    const index = screen.getByText('ApartmentIndex')
    expect(index).toBeInTheDocument()

  })
})

