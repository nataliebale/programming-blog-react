import '../../../styles/card.css';

function Card({ image, title, date, categories }){
  return (
    <div className='card'>
      <div className='card-image'
           style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='card-body'>
        <h1 className='card-title'>
          { title }
        </h1>
        <p className='card-date'>
          { date }
        </p>
        { categories.map((item, index) => {
          return (
            <span key={index} className='card-tag'>
              { item }
            </span>
          );
        })}
      </div>
    </div>
  )
}

export default Card;
