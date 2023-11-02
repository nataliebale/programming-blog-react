import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/footer";
import Search from "./components/blog/Search";
import Categories from "./components/blog/Categories";
import Cards from "./components/blog/Cards";
import { cardsConst } from "./utils/cards.const";
import { useState } from "react";

function App() {
  const [cardsData, setCardsData] = useState(cardsConst);
  const [searchString, setSearchString] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onSearch = (e) => {
    setSearchString(e);
    filterCardsData();
  }

  const handleClick = (card) => {
    const selected = selectedCategories.filter(item => {
      return item.title.toLowerCase() === card.title.toLowerCase();
    });

    let updatedCategories;
    if(selected.length){
      updatedCategories = selectedCategories.filter(item => {
        return item.title.toLowerCase() !== card.title.toLowerCase();
      });
    } else {
      updatedCategories = [...selectedCategories, card];
    }
    setSelectedCategories(updatedCategories);
    filterCardsData();
  }

  const filterCardsData = () => {
    let filteredCards = cardsConst.filter(item => {
      return item.title.toLowerCase().includes(searchString.toLowerCase())
    });

    filteredCards = filteredCards.filter(item => {
      selectedCategories.some(category => item.title === category.title);
    });

    console.log(11111111111, filteredCards, selectedCategories,);

    setCardsData(filteredCards);
  }

  return (
    <div className='App'>
      <Header></Header>
      <main className="app-container">
        <Search
          handleChange={(e) => onSearch(e)}
        ></Search>

        <Categories
          handleClick={(item) => handleClick(item)}
        ></Categories>

        <Cards
          cardsData={cardsData}
        ></Cards>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
