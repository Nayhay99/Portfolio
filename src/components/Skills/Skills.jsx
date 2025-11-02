import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {

    getSkills(){
        var skills = ["Go","JavaScript", "Typescript","Node.js","GraphQL","HTML","CSS","SASS","C++", "C","C#","Java","MongoDB", "SQL", "Git", "ReactJS", "Redux", "GCP","PCF", "AWS","Docker","Kubernetes","Bash","Linux"]
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