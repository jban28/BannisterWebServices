import { useRef } from "react";
import styles from "./BlogFilter.module.css";

const CategoryInput = ({ name, desc, checked, setChecked }) => {
  const inputRef = useRef(null);

  return (
    <label
      className={`${styles.categoryInput} ${checked ? styles.categoryInputChecked : ""}`}
    >
      <input
        className={styles.categoryInputCheckbox}
        checked={checked}
        ref={inputRef}
        type="checkbox"
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <dfn className={styles.categoryInputName}>{name}</dfn>
      :&nbsp;
      {desc}
    </label>
  );
};

const BlogFilter = ({ className, categories, setCategories }) => {
  return (
    <details className={`${styles.blogFilter} ${className}`}>
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
