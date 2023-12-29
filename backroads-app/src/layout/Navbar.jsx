import { PageLinks } from '../data';
import { SocialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='#home'>
            <img src='./assets/logo.svg' className='nav-logo' alt='backroads logo' />
          </a>
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {PageLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a href={href} className='nav-link'>
                {text}
              </a>
            </li>
          ))}
        </ul>
        <ul className='nav-icons'>
          {SocialLinks.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} target='_blank' rel='noreferrer' className='nav-icon'>
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
