import Button from "../common/Button";
import { useState } from "react";

function Category({ title }){
  const [isActive, setIsActive] = useState(false);

  return (
    <Button
      title={title}
      handleClick={() => setIsActive(!isActive)}
      active={isActive}
    ></Button>
  );
}

export default Category;
