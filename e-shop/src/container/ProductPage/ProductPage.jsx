import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/books";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [selectedCover, setSelectedCover] = useState();
    const [cart, setCart] = useState([]);
    const [isFavourited, setIsFavourited] = useState(book?.favourited || false);

    useEffect(() => {
        const wrapper = async () => {
            const data = await getBookById(id);
            setBook(data);
            setSelectedCover(data.cover);
            setIsFavourited(data?.favourited || false);
        };
        wrapper();
    }, [id]);
    // console.log(getBookById(id));

    const handleCoverChange = (event) => {
        setSelectedCover(event.target.value);
    };

    const handleAddToCart = () => {
        setCart((prevCart) => [...prevCart, book]);
    };
    console.log(cart);

    const handleFavouriteClick = () => {
        setIsFavourited(!isFavourited);
    };
    // const activeStyle = (isFavourited) =>
    //     isFavourited
    //         ? `${styles.ProductPage_favBtn_Active} ${styles.ProductPage_favBtn}`
    //         : `${styles.ProductPage_favBtn}`;
    // console.log(isFavourited);

    return (
        book && (
            <div className={styles.ProductPage}>
                <img
                    className={styles.ProductPage_img}
                    src={selectedCover}
                    alt="cover image"
                />
                <div className={styles.ProductPage_info}>
                    <h2>{book.title}</h2>
                    <p>Year Published: {book.published}</p>
                    <p>Price: ${book.price}</p>
                    <p>Quantity: {book.quantity}</p>
                    <label htmlFor="cover-select">Select cover:</label>
                    <select
                        id="cover-select"
                        value={selectedCover}
                        onChange={handleCoverChange}
                    >
                        <option value={book.cover}>Default Cover</option>
                        <option value={book.altCover}>Alternate Cover</option>
                    </select>
                    <button
                        className={styles.ProductPage_addCart}
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                    <FontAwesomeIcon
                        icon={faHeart}
                        onClick={handleFavouriteClick}
                        className={
                            isFavourited
                                ? styles.ProductPage_favBtn_Active
                                : styles.ProductPage_favBtn
                        }
                    />
                    {/* <button
                        onClick={handleFavouriteClick}
                        className={
                            isFavourited
                                ? styles.ProductPage_favBtn_Active
                                : styles.ProductPage_favBtn
                        }
                    >
                        Fav
                    </button> */}
                </div>
            </div>
        )
    );
};

export default ProductPage;
