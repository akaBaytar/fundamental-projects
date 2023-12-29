import { useRef } from 'react';
import { useGlobalContext } from '../context';
import sublinks from '../../data';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const dropdownContainer = useRef(null);

  const dropdownHandler = (e) => {
    const dropdown = dropdownContainer.current;
    const clientRect = dropdown.getBoundingClientRect();

    const { clientX, clientY } = e;
    const { left, right, bottom } = clientRect;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={dropdownHandler}
      ref={dropdownContainer}>
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{ gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr' }}>
        {currentPage?.links?.map(({ id, icon, label, url }) => (
          <a href={url} key={id}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Submenu;
