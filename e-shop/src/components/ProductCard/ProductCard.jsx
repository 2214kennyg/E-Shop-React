import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ title, published, cover, price, id }) => {
    return (
        <div className={styles.ProductCard}>
            <NavLink to={`/${id}`}>
                <div>
                    <img
                        className={styles.ProductCard_img}
                        src={cover}
                        alt="cover image"
                    />
                    <h2>{title}</h2>
                    <p>Year Published: {published}</p>
                    <p>${price}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCard;
