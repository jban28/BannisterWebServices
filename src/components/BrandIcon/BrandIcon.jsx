import "./BrandIcon.css";

const BrandIcon = ({ id, label }) => {
  return (
    <i className={`brand__icon fa-brands fa-${id}`}>
      <span className="brand__tooltip">{label}</span>
    </i>
  );
};

export default BrandIcon;
