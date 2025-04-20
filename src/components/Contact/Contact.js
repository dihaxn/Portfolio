import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>

      <div className="contact__grid">
        <div className="contact__item">
          <FiMail className="contact__icon" />
          <div className="contact__label">Email</div>
          <a href={`mailto:${contact.email}`} className="contact__value">
            {contact.email}
          </a>
        </div>

        <div className="contact__item">
          <FiPhone className="contact__icon" />
          <div className="contact__label">Phone</div>
          <div className="contact__value">+94 701 410 595</div>
        </div>

        <div className="contact__item">
          <FiMapPin className="contact__icon" />
          <div className="contact__label">Location</div>
          <div className="contact__value">Kiribathgoda, Sri Lanka</div>
        </div>

        <div className="contact__item">
          <FiGithub className="contact__icon" />
          <div className="contact__label">GitHub</div>
          <a
            href="https://github.com/dihaxn"
            className="contact__value"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/dihaxn
          </a>
        </div>
      </div>

      <div className="contact__socials">
        <a
          href="https://linkedin.com/in/dihan-laknuka125374269/"
          className="contact__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={24} />
        </a>
        <a
          href="https://web.facebook.com/dihaxn/"
          className="contact__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://x.com/dihaxn"
          className="contact__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="contact__social-link"
        >
          <FiMail size={24} />
        </a>
      </div>
    </section>
  )
}

export default Contact