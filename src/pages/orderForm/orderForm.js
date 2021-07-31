import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderForm = () => {
  return (

    <Container className="mt-5">
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Customer Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Order Date</Form.Label>
    <Form.Control type="date" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Cake Required</Form.Label>
    <Form.Control type="text" placeholder="Cake Required" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Order Now
  </Button>
</Form>
</Container>
  )
}

export default OrderForm;
