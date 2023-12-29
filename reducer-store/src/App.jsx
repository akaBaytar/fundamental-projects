import { useGlobalContext } from '../context';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

function App() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
