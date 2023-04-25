import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/" className={styles.Nav_Link}>
                Home
            </NavLink>
            {/* <NavLink to="/Products" className={activeStyle}>
                Products
            </NavLink> */}
        </nav>
    );
};

export default Nav;
