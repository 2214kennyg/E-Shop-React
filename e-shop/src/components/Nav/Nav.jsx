import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav className={styles.Nav_Link}>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/Products" className={activeStyle}>
                Products
            </NavLink> */}
        </nav>
    );
};

export default Nav;
