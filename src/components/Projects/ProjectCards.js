import React from "react";
import {Card} from "react-bootstrap";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props){
  return(
    <Card style={{ width: '18rem' , margin:'5px'}}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.tech}</Card.Subtitle>
        <Card.Text style={{textAlign:"left",color:"black"}}>
          {props.desc}
        </Card.Text>
        <Card.Link href={props.ghLink} target="_blank"><BsGithub/></Card.Link>
      </Card.Body>
    </Card>
 )
}
export default ProjectCards;