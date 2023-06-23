import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import About from "../About/About"
// import Projects from "../Projects/Projects";
// import Experience from '../Experience/Experience'
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
import Home2 from "./Home2";
// import Type from "./Type";

function Home() {
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h6 style={{ paddingBottom: 15 }} className="heading">
                Hi, my name is
              </h6>
              <h2 className="heading-name">
               Nayonika Mohapatra</h2>
              <div style={{ padding: 50, textAlign: "left", width: "55%", fontSize:"25px" }}>
              I’m a software engineer, contributing lines of code to solve real-world business problems.
              Currently, I am actively looking out for opportunities to build scalable and robust products.
              </div>
            </Col>           
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
/**
 * <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
 */