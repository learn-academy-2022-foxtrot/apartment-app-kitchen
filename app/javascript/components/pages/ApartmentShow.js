import React from "react"
import { useParams } from "react-router-dom"

const ApartmentShow = ({apartments}) => {
  // console.log(apartments)
  const { id } = useParams()
  // console.log(id)
  let showApartment = apartments?.find(apartment => apartment.id === +id)
  console.log(showApartment)


  return (
    <>
      <h3>ApartmentShow</h3>
    </>
  )
}

export default ApartmentShow
