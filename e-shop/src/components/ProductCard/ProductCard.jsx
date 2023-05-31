import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ title, published, cover, price, quantity, id }) => {
    return (
        <div className={styles.ProductCard}>
            <NavLink to={`/${id}`}>
                <div>
                    <img
                        className={styles.ProductCard_img}
                        src={cover}
                        alt="cover image"
                    />
                    <h2 className={styles.ProductCard_title}>{title}</h2>
                    <p className={styles.ProductCard_text}>
                        Year Published: {published}
                    </p>
                    <p className={styles.ProductCard_text}>Price: ${price}</p>
                    <p className={styles.ProductCard_text}>
                        Quantity: {quantity}
                    </p>
                </div>
            </NavLink>
        </div>
    );
};

export default ProductCard;
