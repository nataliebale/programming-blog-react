import '../../styles/categories.css';
import { categoriesConst } from "../../utils/categories.const";
import Category from "./Category";

function Categories(){
  return (
    <div>
      <div className='categories-header'>
        <p className='categories-title'>Search by topics</p>
        <a className='clear-btn'>Clear all</a>
      </div>
      <div className='categories-list'>
        { categoriesConst.map((item, index) => {
            return (
              <Category key={index} title={item.title}></Category>
            );
          })
        }
      </div>
    </div>
  )
}

export default Categories;
