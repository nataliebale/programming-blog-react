import '../../styles/cards.css';
import { cardsConst } from "../../utils/cards.const";
import Card from "./Card";

function Cards(){
  return (
    <div className='cards'>
      { cardsConst.map((item, index) => {
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
