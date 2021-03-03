import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "../images/background1.png"
import ModalStart from "../components/modal"; 

 


function Homepage() {
  return (
    <div>
      <Hero backgroundImage= {background}> 
        
      </Hero>
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
