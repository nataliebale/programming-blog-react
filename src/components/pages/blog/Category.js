import Button from "../../common/Button";
import { useState } from "react";

function Category({ title, handleClick }){
  const [isActive, setIsActive] = useState(false);

  const onHandleClick = () => {
    setIsActive(!isActive);
    handleClick()
  }

  return (
    <Button
      title={title}
      handleClick={() => onHandleClick()}
      active={isActive}
    ></Button>
  );
}

export default Category;
