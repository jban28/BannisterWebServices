import { useRef, useState } from "react";
import "./BlogFilter.css"

const CategoryInput = ({ name, desc, checked, setChecked }) => {
  const inputRef = useRef(null)

  return (
      <label className={"category-input" + (checked ? " category-input__checked" : "")}>
        <input className="category-input--checkbox" checked={checked} ref={inputRef} type="checkbox" onChange={(e) => { setChecked(e.target.checked) }}/>
        <dfn className="category-input--name">{name}</dfn>
        :&nbsp;
        {desc}
      </label>
  )
}

const BlogFilter = () => {
  const [checked, setChecked] = useState(false);

  return <div>
    <CategoryInput name="Test" desc="a description of the category" checked={checked} setChecked={setChecked} />
  </div>;
};

export default BlogFilter;
