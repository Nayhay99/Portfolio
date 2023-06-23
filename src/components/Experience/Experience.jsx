import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import './Experience.css'
function getJobsList() {
  let jobs = [
    {
      "company" : "Dell Technologies",
      "role" : "SDE 1",
      "time":"Aug 2021 - Oct 2022",
      "work": [
        "Developed scalable and robust orchestration engine - to manage complex cross-domain workflows and handle order exceptions that reduced order journey time by 20%",
        "Developed REST APIs in Golang and Typescript with test coverage of around 90%, consumed by business team for data visualization and by various product teams to analyze the performance of their services in the order orchestration.",
        "Developed regular alerting capability in Golang using Microsoft Teams webhook to track microservices health and RMQ backlogs which helped stabilize the non-prod testing environments."
      ]
    },{
      "company" : "Dell Technologies",
      "role" : "SDE Winter Intern",
      "time":"Feb 2021 - May 2021",
      "work": [
        "Developed Order Management UI using ReactJS to view order status and order processing errors.",        
      ]
    },{
      "company" : "Dell Technologies",
      "role" : "SDE Summer Intern",
      "time":"May 2020 - July 2020",
      "work": [
        "Developed DataStudio - a business analytics dashboard to visualize the order latency by heatmap, in React and d3.js",
        "Developed GraphQL API in NodeJS environment to fetch and aggregate data from elasticstack."        
      ]
    },{
      "company" : "Brickview Studios",
      "role" : "Backend Developer Intern",
      "time":"Sept 2019 - Nov 2019",
      "work": [
        "Added firebase user authentication and login, integrated travis CI/CD and Razorpay payment integration.",
        "Wrote REST APIs in NodeJS for CRUD operations of GCP buckets."
      ]
    }
  ]
  const jobsJSX = jobs.map((job) => {
    return (
      <li>
        <span className="details">{`${job.role}@${job.company}`}</span>
        <span className="float-end details">{job.time}</span>
        <ul>
          {job.work.map((item) => <li>{item}</li>)}
        </ul>
      </li>
    )
  })
  return jobsJSX
}
export default function Experience() {
  const jobs = getJobsList()
  return (
    <MDBContainer id="experience" className="project-section" style={{maxWidth:"100%"}}>
      <MDBRow>
        <MDBCol md="6" offsetMd="3">
          <h1 style={{ marginLeft: "1.2rem", color:"white"}}>My Experience</h1>
          <ul className="timeline-3">
            {jobs}
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}