import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../../services/books";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [selectedCover, setSelectedCover] = useState();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const data = await getBookById(id);
            setBook(data);
            setSelectedCover(data.cover);
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

    // const toggleFavourite = () => {
    //     setBook((prevBook) => ({
    //         ...prevBook,
    //         favourited: !prevBook.favourited,
    //     }));
    // };

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
                    <p>${book.price}</p>
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
                    {/* <button
                        onClick={toggleFavourite}
                        className={book.favourited ? styles.favBtn : null}
                    >
                        Favourite
                    </button> */}
                </div>
            </div>
        )
    );
};

export default ProductPage;
