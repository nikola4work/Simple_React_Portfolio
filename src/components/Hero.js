import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && (
              <h1 className="display-5 font-weight-bolder web-dev">
                {props.title}
              </h1>
            )}
            {props.subtitle && (
              <h3 className="display-7 font-weight-light">{props.subtitle}</h3>
            )}
            <hr className="hr" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
