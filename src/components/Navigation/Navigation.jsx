import { useLocation, Link } from "react-router-dom";
import { forwardRef } from "react";
import styles from "./Navigation.module.css";

const NavLink = ({ children, path }) => {
  const currentPath = useLocation().pathname;
  const active = path === currentPath;
  return (
    <Link
      className={styles.navLink + (active ? ` ${styles.active}` : "")}
      to={`${path}`}
    >
      {children}
    </Link>
  );
};

const Navigation = forwardRef(function ({ opacity = 1 }, ref) {
  return (
    <nav
      className={styles.navBar}
      style={{ backgroundColor: `rgba(255, 42, 0, ${opacity})` }}
      ref={ref}
    >
      <div className={styles.navList}>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/portfolio">Portfolio</NavLink>
        <NavLink path="/blog">Blog</NavLink>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
