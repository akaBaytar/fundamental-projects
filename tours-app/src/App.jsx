import { useState, useEffect } from 'react';

import Tours from './components/Tours';
import Loading from './components/Loading';

const URL = '/mock/data/index.json';

const App = () => {
  // states
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // functions
  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => tour.id !== id);
    setTours(newToursList);
  };

  //fetch mock data
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // loading component
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours For You</h2>
          <div className="title-underline"></div>
          <button type='button' className='button refresh-button' onClick={() => fetchTours()}>
            Refresh Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
