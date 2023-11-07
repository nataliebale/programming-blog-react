import '../../styles/search.css';
import searchIcon from '../../assets/images/magnifying-glass-solid.svg';

function Search({ handleChange }){
  return (
    <div className='search-block'>
      <img className='search-icon' src={searchIcon} alt=""/>
      <input
        className='search-input'
        type="text"
        placeholder='Search posts'
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search;
