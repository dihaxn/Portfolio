import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  const technicalSkills = skills.filter(skill =>
    ["React", "Spring Boot", "AWS", "Docker", "Jenkins"].includes(skill))
  const professionalSkills = skills.filter(skill => !technicalSkills.includes(skill))

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div className='skills__container'>
        <div className='skills__column'>
          <h3>Technical Skills</h3>
          <ul className='skills__list'>
            {technicalSkills.map((skill) => (
              <li key={skill} className='skills__list-item'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className='skills__column'>
          <h3>Professional Skills</h3>
          <ul className='skills__list'>
            {professionalSkills.map((skill) => (
              <li key={skill} className='skills__list-item'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills