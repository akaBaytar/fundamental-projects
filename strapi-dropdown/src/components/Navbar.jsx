import { useGlobalContext } from '../context';

import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const dropdownHandler = (e) => {
    if (!e.target.classList.contains('nav-link')) setPageId(null);
  };

  return (
    <nav onMouseOver={dropdownHandler}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-button' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
