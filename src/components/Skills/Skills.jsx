import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {

    getSkills(){
        var skills = ["Golang","JavaScript", "Typescript","Node.js","GraphQL","HTML", "C++", "C","Java","MongoDB", "SQL", "Git", "ReactJS", "ReduxJS", "GCP","PCF", "Docker","Kubernetes"]
        return skills.map((item) => <li>{item}</li>)
    }
    render() {

    var Skills = this.getSkills()

    return (
      <div id="skills">
        <h1 style={{marginLeft: "1.2rem"}}>My Skills</h1>
        <ul>
          {Skills}
        </ul>
      </div>
    );
  }
}

export default Skills