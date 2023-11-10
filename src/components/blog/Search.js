import '../../styles/search.css';
import deleteIcon from '../../assets/images/x-solid.svg';
import searchIcon from '../../assets/images/magnifying-glass-solid.svg';
import { useState } from "react";
import button from "../common/Button";

function Search({ handleChange }){
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (event) => {
    setSearchValue(event);
    handleChange(event)
  }

  const onClearSearchField = () => {
    document.getElementById('searchInput').value = '';
    onInputChange('');
  }

  return (
    <div className='search-block'>
      { searchValue ?
        (<img className='search-icon'
              onClick={() => onClearSearchField()}
              src={deleteIcon}
              alt=""/>
        ) :
        (<img className='search-icon' src={searchIcon} alt=""/>)
      }
      <input
        id='searchInput'
        className='search-input'
        type="text"
        placeholder='Search posts'
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  )
}

export default Search;
