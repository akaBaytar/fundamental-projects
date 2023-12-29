import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
        <div className="tours">
          {tours.map((tour)=>(
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Tours;
