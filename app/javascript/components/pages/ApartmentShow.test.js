import React from "react"
import { getByRole, render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, NavLink, Route, Routes, BrowserRouter } from "react-router-dom"
import mockApartments from "../mockApartments"

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ApartmentShow />
      </BrowserRouter>
    )
    expect(screen.getByText("Apartment Show")).toBeInTheDocument()
  })
  // it("NavLink exists", () => {
  //   render(
  //     <MemoryRouter initialEntries={["/apartmentindex"]}>
  //       <Routes>
  //         <Route path="/apartmentindex" element={<ApartmentShow apartments={ mockApartments }/>} />
  //       </Routes>
  //     </MemoryRouter>
  //   )
  //   const navLink = screen.getByText("Back to all Apartments")
  //   expect(navLink).toBeInTheDocument()
  // })
})
