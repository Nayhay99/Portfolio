import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from '../../Assets/wa-dp.jpg'
import Tilt from "react-parallax-tilt";
import { LANDING_PAGE } from "./constants";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Namaste, I am Nayonika
            </h1>
            <p className="home-about-body" style={{fontFamily:"Roboto",textAlign:"justify"}}>
            {LANDING_PAGE.desc}
              I am a 2021 BTech CSE graduate from IIIT Bhubaneswar. <br/><br/>
              I have around 3 years of professional software development experience. Currently I work at <span className="details"> PhonePe</span> as a Software Engineer. Previously,
              I worked at <span className="details">Dell Technologies, Bengaluru</span>.
              I absolutely enjoy writing clean code in <span style={{fontFamily:"monospace"}} className="details">ReactJS, NodeJS, Typescript, Golang & Java.</span> 
              I possess professional knowledge on databases - <span style={{fontFamily:"monospace"}} className="details">PostgreSQL, MongoDB and Elastic</span> & cloud technologies - <span style={{fontFamily:"monospace"}} className="details">docker,kubernetes,GCP,PCF,Firebase.</span> <br/><br/>
              I consider programming an art form - where one can be as expressive and creative as possible.<br/><br/>
              Besides coding, I love quizzing, reading fiction and hanging out with family and friends.<br></br><br></br>

              Please feel free to reach out to me via <a href="mailto:nayonika99@outlook.com" className="details">e-mail</a> or <a className="details" href="https://linkedin.com/in/nayonika-mohapatra-65592614b/">Linkedin.</a>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profile} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
