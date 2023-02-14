import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fish from "../images/fish.jpg"
import car from "../images/car.jpg"
import "../index.css"

export default function Body() {
  return (
    <Container>
      <Row>
      <Col>
            <Card className="card">
            <Card.Img variant="top" src={car} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>      
        </Col>
        <Col>
            <Card className="card">
            <Card.Img variant="top" src={fish} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>    
        </Col>
      </Row>
    </Container>
  );
}