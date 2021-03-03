import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
<<<<<<< HEAD
import background from "../images/background1.png"
=======
import background from "../images/background1.png";
>>>>>>> 27171226b10f9b36431c6f6e5f230902b498828b
import ModalSignUp from "../components/modalSignUp"; 


 


function Landing() {
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
            

          <ModalSignUp />


          </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default Landing;
