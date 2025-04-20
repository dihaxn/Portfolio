import { education } from '../../portfolio'
import './Education.css'

const Education = () =>(
    <section className='section education' id='education'>
      <h2 className='section__title'>Education</h2>
      {education.map((edu, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className='education__item'>
          <h3>{edu.degree || edu.qualification}</h3>
          <p className='education__institution'>{edu.university || edu.school}</p>
          {edu.stream && <p className='education__stream'>{edu.stream}</p>}
          <p className='education__duration'>{edu.period || edu.year}</p>
        </div>
      ))}
    </section>
  )

export default Education