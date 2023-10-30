import '../../styles/button.css';

function Button({ title, active, handleClick }){
  return (
    <button
      className={`btn ${active && 'active'}`}
      onClick={(e) => handleClick(e)}
    >
      { title }
    </button>
  )
}

export default Button;
