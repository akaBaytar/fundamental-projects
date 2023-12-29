const Categories = ({ categories, filterItems }) => {
  return (
    <div className='button-container'>
      {categories.map((category) => (
        <button type='button' className='button' key={category} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;
