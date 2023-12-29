import { useEffect, useState } from 'react';

import Button from './container/Button';
import JobInfo from './components/JobInfo';

const URL = '../mock/data.json';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <Button jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  );
};
export default App;
