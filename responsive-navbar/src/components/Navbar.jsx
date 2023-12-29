import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';

import { links, social } from '../../data';

import Logo from '/favicon.ico';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log(linksRef.current);
  };

  // const linkStyles = {
  //   height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  // };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={Logo} alt='Logo' className='logo' />
          <button type='button' className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              {links.map(({ id, url, text }) => (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
