import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "../images/background1.jpg"
import ModalStart from "../components/modal"; 

 


function Homepage() {
  return (
    <div>
        <div style={{ backgroundImage: `url(${background})` }}>
      <Hero>
        <h1>ezlife</h1>
        <h2>Your life-simplifier tool.</h2>
      </Hero>
      </div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            
          <ModalStart />

          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default Homepage;
