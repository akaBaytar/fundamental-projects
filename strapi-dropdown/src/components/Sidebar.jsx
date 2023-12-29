import { useGlobalContext } from '../context';

import { FaTimes } from 'react-icons/fa';
import sublinks from '../../data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <button className='close-button' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map(({ pageId, links, page }) => (
            <article key={pageId}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map(({ id, icon, label, url }) => (
                  <a href={url} key={id}>
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
