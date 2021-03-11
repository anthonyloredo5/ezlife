import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "../images/background1.png";
import ModalSignUp from "../components/modalSignUp"; 


 
function Landing(props) {
  console.log('PROPS IN TH LADNIGN!!', props)
  return (
    <div>
      <Hero backgroundImage= {background}> 
        
      </Hero>
      <div >
      <Container style={{ marginTop: 20, textAlign: "center",}}>
        {/* <Row>
          <Col size="md-12">
            <h1>Welcome!</h1>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-12">
            

          <ModalSignUp updateUser={props.updateUser}/>


          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default Landing;
