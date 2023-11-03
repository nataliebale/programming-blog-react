import '../../styles/categories.css';
import { categoriesConst } from "../../utils/categories.const";
import Category from "./Category";

function Categories({ handleClick, clearCategories }){

  return (
    <div>
      <div className='categories-header'>
        <p className='categories-title'>Search by topics</p>
        <a
          className='clear-btn'
          onClick={() => clearCategories()}
        >
          Clear all
        </a>
      </div>
      <div className='categories-list'>
        { categoriesConst.map((item, index) => {
            return (
              <Category
                key={index}
                title={item.title}
                handleClick={() => {handleClick(item)}}
              ></Category>
            );
          })
        }
      </div>
    </div>
  )
}

export default Categories;
