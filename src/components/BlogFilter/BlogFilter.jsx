import { useRef, useState } from "react";
import "./BlogFilter.css";

const CategoryInput = ({ name, desc, checked, setChecked }) => {
  const inputRef = useRef(null);

  return (
    <label
      className={"category-input" + (checked ? " category-input__checked" : "")}
    >
      <input
        className="category-input--checkbox"
        checked={checked}
        ref={inputRef}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <dfn className="category-input--name">{name}</dfn>
      :&nbsp;
      {desc}
    </label>
  );
};

const BlogFilter = () => {
  const [categories, setCategories] = useState({
    deepDive: {
      name: "Deep Dive",
      desc: "an in depth look at a particular topic",
      checked: false,
    },
    quickLearn: {
      name: "Quick Learn",
      desc: "a quick look at a specific aspec of something",
      checked: false,
    },
  });

  const categoryQuery = Object.values(categories)
    .filter((category) => category.checked)
    .map((category) => category.checked && { category: { eq: category.name } });

  console.log(categoryQuery);

  return (
    <div>
      {Object.entries(categories).map(([key, categoryProps]) => {
        const setChecked = (newValue) => {
          setCategories({
            ...categories,
            [key]: {
              ...categoryProps,
              checked: newValue,
            },
          });
        };

        const { name, desc, checked } = categoryProps;
        return (
          <CategoryInput
            key={key}
            name={name}
            desc={desc}
            checked={checked}
            setChecked={setChecked}
          />
        );
      })}
    </div>
  );
};

export default BlogFilter;
