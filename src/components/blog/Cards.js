import '../../styles/cards.css';
import Card from "./Card";

function Cards({ cardsData }){

  return (
    <div className='cards'>
      { cardsData.map((item, index) => {
        return (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            date={item.date}
            categories={item.categories}
          ></Card>
        );
      }) }
    </div>
  )
}

export default Cards;
