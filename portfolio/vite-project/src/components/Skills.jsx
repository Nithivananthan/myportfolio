import React from 'react'

function Skills({skills}) {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} style={{ width: "60px", height: "60px" }} />
            <p>{skill.name}</p>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Skills
