import Navbar from '../Navbar/Navbar'
import { header } from '../../portfolio'

const Header = () => {
  const { homepage, title } = header

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4em',
    background: 'var(--clr-bg)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2.5%',
    boxShadow: 'var(--shadow)'
  }

  return (
    <header style={headerStyle} className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} target="_blank" rel="noopener noreferrer" className="link" download>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header