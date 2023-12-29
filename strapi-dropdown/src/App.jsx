import { useGlobalContext } from './context';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};

export default App;
