import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/footer";
import Search from "./components/blog/Search";
import Categories from "./components/blog/Categories";
import Cards from "./components/blog/Cards";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <main className="app-container">
        <Search></Search>
        <Categories></Categories>
        <Cards></Cards>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
