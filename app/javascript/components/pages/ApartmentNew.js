import React from "react"
import { Form, Row, Col, FormGroup, Label, Button, Input } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ createApartment }) => {
    const navigate = useNavigate()
    const [newApartment, setNewApartment] = useState({
    	street:"",
        city:"",
        state:"",
        price:"",
        bedrooms:"",
        bathrooms:"",
        pets:"",
        image:"",
        manager:"",
        email:""
    })
    const handleApartments = (e) => {
        setNewApartment({ ...newApartment, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        createApartment(newApartment)
        navigate("/apartmentindex")
    }

  return (
    <>
      <h1>Add a New Apartment</h1>
        <Form>
            <Row>
                <Col md={4}>
                <FormGroup>
                    <Label for="street">
                    Street:
                    </Label>
                    <Input
                    name="street"
                    placeholder="Enter a Street"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.street}
                    />
                </FormGroup>
                </Col>
                <Col md={4}>
                <FormGroup>
                    <Label for="city">
                    City:
                    </Label>
                    <Input
                    name="city"
                    placeholder="Enter a City"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.city}
                    />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="state">
                    State:
                    </Label>
                    <Input
                    name="state"
                    placeholder="Enter a State"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.state}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="price">
                    Price
                    </Label>
                    <Input
                    name="price"
                    placeholder="Enter a Price"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.price}
                    />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="bedrooms">
                    Bedrooms
                    </Label>
                    <Input
                    name="bedrooms"
                    placeholder="Number of Bedrooms"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.bedrooms}
                    />
                </FormGroup>
                </Col>
                <Col md={2}>
                <FormGroup>
                    <Label for="bathrooms">
                    Bathrooms
                    </Label>
                    <Input
                    name="bathrooms"
                    placeholder="Number of Bathrooms"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.bathrooms}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={2}>
                <FormGroup>
                    <Label for="pets">
                    Pets
                    </Label>
                    <Input
                    name="pets"
                    placeholder="Pets Allowed"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.pets}
                    />
                </FormGroup>
                </Col>
                <Col md={8}>
                <FormGroup>
                    <Label for="image">
                    Image URL
                    </Label>
                    <Input
                    name="image"
                    placeholder="Upload an Image"
                    type="url"
                    onChange={handleApartments}
                    value={newApartment.image}
                    />
                </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                <FormGroup>
                    <Label for="manager">
                    Manager
                    </Label>
                    <Input
                    name="manager"
                    placeholder="Enter your Name"
                    type="text"
                    onChange={handleApartments}
                    value={newApartment.manager}
                    />
                </FormGroup>
                </Col>
                <Col md={5}>
                <FormGroup>
                    <Label for="email">
                    Email
                    </Label>
                    <Input
                    name="email"
                    placeholder="Enter your Email"
                    type="email"
                    onChange={handleApartments}
                    value={newApartment.email}
                    />
                </FormGroup>
                </Col>
            </Row>
                <Button onClick={handleSubmit} name="submit">
                Submit Apartment
                </Button>
        </Form>
    </>
  )
}

export default ApartmentNew