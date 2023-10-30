import '../../../styles/header.css';
import Logo from "./Logo";
import Nav from "./Nav";

function Header(){
  return (
    <header>
      <div className='app-container header-block'>
        <Logo></Logo>
        <Nav></Nav>
      </div>
    </header>
  )
}

export default Header;
