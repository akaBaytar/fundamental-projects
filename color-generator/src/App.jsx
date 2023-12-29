import { useState } from 'react';

import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './components/Form';
import ColorList from './components/ColorList';

const App = () => {
  const [colors, setColors] = useState(new Values('#645cff').all(10));

  const addColor = (color) => {
    try {
      let newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position='top-right' />
    </main>
  );
};

export default App;
