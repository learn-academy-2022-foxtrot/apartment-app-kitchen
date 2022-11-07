import React from "react"
import { render } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { MemoryRouter, Route, Routes} from "react-router-dom"
import mockApartments from "../mockApartments"

describe ("<ApartmentShow/>", () => {
  it("renders without crashing", () => {
      render (
          <MemoryRouter initialEntries={["/ApartmentShow/1"]}>
          <Routes>
              <Route path="/ApartmentShow/:id" element={<ApartmentShow apartments={mockApartments}/>} />
          </Routes>

          </MemoryRouter>
      )
      const showRender = screen.getByText(/Privet/i)
      expect(showRender).toHaveTextContent("street: '4 Privet Drive'")
  } )
})