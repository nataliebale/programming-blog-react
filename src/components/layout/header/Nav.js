import '../../../styles/nav.css';
import { navConst } from "../../../utils/nav.const";

function Nav(){
  return (
    <nav>
      <ul>
        { navConst.map((item, index) => {
            return (
              <li className='nav-item' key={index}>
                <a className='nav-link' href={item.linkUrl}>
                  {item.title}
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;
