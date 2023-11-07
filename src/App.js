import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/footer";
import Search from "./components/blog/Search";
import Categories from "./components/blog/Categories";
import Cards from "./components/blog/Cards";
import { cardsConst } from "./utils/cards.const";
import { useEffect, useState } from "react";


function App() {
  const [cardsData, setCardsData] = useState(cardsConst);
  const [searchString, setSearchString] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    filterCardsData();
  }, [selectedCategories, searchString]);

  const onSearch = (e) => {
    setSearchString(e);
  }

  const handleClick = (card) => {
    setSelectedCategories(prevCategories => {
      const isSelected = prevCategories.some(item =>
        item.title.toLowerCase() === card.title.toLowerCase()
      );

      if (isSelected) {
        return prevCategories.filter(item =>
          item.title.toLowerCase() !== card.title.toLowerCase()
        );
      } else {
        return [...prevCategories, card];
      }
    });
  }

  const filterCardsData = () => {
    setCardsData(cardsConst);
    let filteredCards = cardsConst;

    if(!selectedCategories.length && !searchString) {
      return;
    }

    if(selectedCategories.length) {
      const selectedCategoryTitles = selectedCategories.map(category => category.title);
      filteredCards = cardsConst.filter(card =>
        card.categories.some(category => selectedCategoryTitles.includes(category))
      );
    }

    if (searchString) {
      filteredCards = filteredCards.filter(item => {
          return item.title.toLowerCase().includes(searchString.toLowerCase())
        }
      );
    }

    setCardsData(filteredCards);
  }

  return (
    <div className='App'>
      <Header />
      <main className="app-container">
        <Search handleChange={onSearch} />
        <Categories
          handleClick={handleClick}
          clearCategories={() => setSelectedCategories([])}
        />
        <Cards cardsData={cardsData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
