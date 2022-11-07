import React from "react"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  return (
    <>
      <h3>Apartment Show</h3>
      <div className="apartment-show">
        {currentApartment &&
          <Card
            style={{ width: "20rem" }}
          >
            <img src={currentApartment.image} alt="image of eligible apartment"/>
            <CardBody>
              <CardTitle tag="h5">
               <p>Address: {currentApartment.street}, {currentApartment.city}, {currentApartment.state} </p>
              </CardTitle>
                <CardSubtitle>
                  <p>Manager: {currentApartment.manager}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Email: {currentApartment.email}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Price: {currentApartment.price}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Beds: {currentApartment.bedrooms}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Bath: {currentApartment.bathrooms}</p>
                </CardSubtitle>
                <CardSubtitle>
                  <p>Pets: {currentApartment.pets}</p>
              </CardSubtitle>
              <NavLink to={`/apartmentindex`} className="nav-link">
                <Button>Back to all Apartments</Button>
              </NavLink>
              <NavLink to={`/apartmentedit/${currentApartment.id}`} className="nav-link">
                <Button>Edit Apartment</Button>
              </NavLink>
            </CardBody>
          </Card>
          
        }
      </div>
    </>
  )
}

export default ApartmentShow
