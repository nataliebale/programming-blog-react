import '../../styles/search.css';

function Search({ handleChange }){
  return (
    <div className='search-block'>
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
