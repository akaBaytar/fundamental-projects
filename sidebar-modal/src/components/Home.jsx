import { FaBars } from 'react-icons/fa';

import { useGlobalContext } from '../context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button type='button' className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button type='button' className='button' onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
