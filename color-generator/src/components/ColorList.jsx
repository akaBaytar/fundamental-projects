import { nanoid } from 'nanoid';

import Color from './Color';

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => (
        <Color color={color} index={index} key={nanoid()} />
      ))}
    </section>
  );
};

export default ColorList;
