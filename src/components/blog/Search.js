import '../../styles/search.css';
import deleteIcon from '../../assets/images/x-solid.svg';
import searchIcon from '../../assets/images/magnifying-glass-solid.svg';
import { useState } from "react";

function Search({ handleChange }){
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (event) => {
    setSearchValue(event);
    handleChange(event)
  }

  const onClearSearchField = () => {
    setSearchValue('');
  }

  return (
    <div className='search-block'>
      { searchValue ?
        (<img className='search-icon' src={deleteIcon} alt=""/>) :
        (<img className='search-icon' onClick={() => onClearSearchField()} src={searchIcon} alt=""/>)
      }
      <input
        className='search-input'
        type="text"
        placeholder='Search posts'
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  )
}

export default Search;
