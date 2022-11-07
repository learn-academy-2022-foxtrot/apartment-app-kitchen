import React from "react"
import { Card, CardBody, CardTitle, CardText, CardLink, ListGroup, ListGroupItem } from "reactstrap"

const ProtectedApartmentIndex = ({ apartments, current_user }) => {
  console.log(current_user)
  console.log(apartments)

  const currentUserApt = apartments?.filter(item => item.user_id === current_user.id)

  console.log(currentUserApt)
  return (
    <>
      <h3>ApartmentIndex</h3>

          {currentUserApt?.map((apt, idx) => {
            return (
              < div key={idx} style={{
                padding: "24px"
              }}>
                <Card
                  style={{
                    width: "28rem",
                    padding: "24px"
                  }}
                >
                  <img
                    alt="Card"
                    src={apt.image}
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      {apt.street} {apt.city} {apt.state}
                    </CardTitle>
                    <CardText>
                      This home has {apt.bedrooms} bedrooms and {apt.bathrooms} bathrooms
                    </CardText>
                  </CardBody>
                  <ListGroup flush>
                    <ListGroupItem>
                      Rent Price: ${apt.price}
                    </ListGroupItem>
                    <ListGroupItem>
                      Manager: {apt.manager}
                    </ListGroupItem>
                    <ListGroupItem>
                      Contact Email: {apt.email}
                    </ListGroupItem>
                  </ListGroup>
                  <CardBody>
                    <CardLink href="#">
                      More Photos
                    </CardLink>
                    <CardLink href="#">
                      Apply Today
                    </CardLink>
                  </CardBody>
                </Card>
              </div>
            )
          })}

    </>
  )
}

export default ProtectedApartmentIndex
