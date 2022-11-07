import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import mockApartments from "../mockApartments"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex />, div)
  })

  it("renders apartment cards", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex apartments={mockApartments} />, div)
    mockApartments.forEach((apartment) => {
      const apartmentName = screen.getByText(apartment.street)
      expect(apartmentName).toBeInTheDocument()
    })
  })
})
