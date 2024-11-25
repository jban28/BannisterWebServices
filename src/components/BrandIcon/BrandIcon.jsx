import "./BrandIcon.css";

const BrandIcon = ({ id, label }) => {
  return (
    <i className={`brand-icon__icon fa-brands fa-${id}`}>
      <span className="brand-icon__tooltip">{label}</span>
    </i>
  );
};

export default BrandIcon;
