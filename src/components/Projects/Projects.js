import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function getProjectList () {
  var Projects = [{
    "title" : "Chat Application",
    "tech" : "NodeJS | Socket.io | Firebase",
    "desc" : "A chat application built to get hands on experience of socket.io and NodeJS.User can join a chat room to communicate with other users.",
    "repo" : "chat-app-nodejs"
  },{
    "title" : "Hostel Management Application",
    "tech" : "NodeJS | PostGreSQL | HTML | CSS",
    "desc" : "Academic project  to implement various features of hostel management for 3 key users - admin, warden and student",
    "repo" : "Hostel-Management"
  },{
    "title" : "E-commerce Website",
    "tech" : "ReactJS | MongoDB | GraphQl |Firebase",
    "desc" : "React powered dummy e-commerce platform with firebase authentication and stripe payment integration",
    "repo" : "e-commerce-platform"
  }]
  var list = Projects.map((entry) => {
    return (
        <ProjectCard
          title={entry.title}
          desc={entry.desc}
          tech={entry.tech}
          ghLink={`https://github.com/Nayhay99/${entry.repo}`}
        />
    )
  })
  return list
}

function Projects() {
  let projects = getProjectList()
  return (
    <Container id="project" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Projects
        </h1>
        <CardGroup>{projects}</CardGroup>        
      </Container>
    </Container>
  );
}

export default Projects;