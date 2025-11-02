import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import About from "../About/About"
// import Projects from "../Projects/Projects";
// import Experience from '../Experience/Experience'
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
import Home2 from "./Home2";
import { LANDING_PAGE } from "./constants";
// import Type from "./Type";

function Home() {
  return (
    <section id="home">
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