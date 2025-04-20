import { certifications, awards } from '../../portfolio'
import './Achievements.css'

const Achievements = () =>(
    <section className='section achievements' id='achievements'>
      <h2 className='section__title'>Achievements</h2>
      <div className='achievements__container'>
        <div className='achievements__column'>
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className='achievements__item'>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='achievements__column'>
          <h3>Awards & Activities</h3>
          <ul>
            {awards.map((award, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className='achievements__item'>
                {award.link ? (
                  <a href={award.link} target="_blank" rel="noopener noreferrer">
                    {award.name}
                  </a>
                ) : (
                  award.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )

export default Achievements