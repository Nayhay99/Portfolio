import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
function getSocials(){
  let socials = [
    
    {
      "platform" : "Linkedin",
      "icon" : <AiFillLinkedin/>,
      "link": "https://linkedin.com/in/nayonika-mohapatra-65592614b/"
    },
    {
      "platform" : "Github",
      "icon" : <AiFillGithub/>,
      "link": "https://github.com/Nayhay99"
    },
    {
      "platform" : "Email",
      "icon" : <AiOutlineMail/>,
      "link": "mailto: nayonika99@outlook.com"
    }
  ]
  return socials.map((social) => {
    return (
      <li className="social-icons">
       <a href={social.link} style={{color:"white"}} target="_blank" 
       rel="noopener noreferrer">
        {social.icon}
       </a>
      </li>
    )
  })
}
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Nayonika Mohapatra</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Nayonika</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {getSocials()}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
