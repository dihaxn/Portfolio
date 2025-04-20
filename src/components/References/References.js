import { references } from '../../portfolio'
import './References.css'

const References = () =>(
    <section className='section references' id='references'>
      <h2 className='section__title'>References</h2>
      <div className='references__container'>
        {references.map((ref, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className='reference__card'>
            <h3>{ref.name}</h3>
            <p className='reference__role'>{ref.role}</p>
            <p className='reference__company'>{ref.company}</p>
            <p className='reference__contact'>{ref.contact}</p>
          </div>
        ))}
      </div>
    </section>
  )

export default References;