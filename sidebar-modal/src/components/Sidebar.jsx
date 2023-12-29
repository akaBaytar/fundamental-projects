import logo from '/favicon.ico';
import { social, links } from '../../data';
import { FaTimes } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='Logo' className='logo' />
        <button className='close-button' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='social-links'>
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url} target='_blank' rel='noreferrer'>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
