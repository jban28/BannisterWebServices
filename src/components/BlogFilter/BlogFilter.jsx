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

const BlogFilter = ({ className, categories, setCategories }) => {
  return (
    <details className={`blog-filter ${className}`}>
      <summary>Filter by category</summary>
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
    </details>
  );
};

export default BlogFilter;
