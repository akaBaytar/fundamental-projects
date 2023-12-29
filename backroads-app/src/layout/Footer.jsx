import { PageLinks } from '../data';
import { SocialLinks } from '../data';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {PageLinks.map(({ id, href, text }) => (
          <li key={id}>
            <a href={href} className='footer-link'>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='footer-icons'>
        {SocialLinks.map(({ id, href, icon }) => (
          <li key={id}>
            <a href={href} target='_blank' rel='noreferrer' className='footer-icon'>
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className='copyright'>
        backroads travel tours company
        <small id='date'> copyright &copy; {date} all rights reserved </small>
      </p>
    </footer>
  );
};
export default Footer;
