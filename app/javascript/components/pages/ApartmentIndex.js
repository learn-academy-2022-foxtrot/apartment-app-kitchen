import React from "react"
import {Card, CardBody, CardTitle, Button, CardSubtitle } from "reactstrap"

const ApartmentIndex = ({apartments}) => {
  // console.log(apartments)
  return (
    <main>
      <h1>Apartment Index!</h1>
      {apartments?.map((apartment, index) => {
        return(
          <>
            <Card 
              style={{ 
                width: '18 rem'
              }}
              key = {index}
            >
              <img alt={`profile of an apartment`} src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">{apartment.street},{apartment.city},{apartment.state}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Price: {apartment.price}
                  Bathrooms: {apartment.bathrooms}
                  Bedrooms: {apartment.bedrooms}
                </CardSubtitle>
                <Button>See More Details</Button>
              </CardBody>
            </Card>
          </>
        )
      })}
    </main>
  )
}

export default ApartmentIndex
