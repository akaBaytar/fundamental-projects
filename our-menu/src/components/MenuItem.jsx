const MenuItem = ({ title, price, desc, img }) => {
  return (
    <article>
      <img src={img} alt={title} className='image' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
