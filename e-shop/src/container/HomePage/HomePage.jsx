import styles from "./HomePage.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import MyCarousel from "../../components/Carousel/Carousel";

const HomePage = ({ books }) => {
    return (
        <div>
            <MyCarousel />
            <h1 className={styles.header}>
                Books by Scott Westerfeld
                <img
                    className={styles.header_img}
                    src="https://m.media-amazon.com/images/I/51apjhhqkAL.jpg"
                    alt=""
                />
            </h1>

            <section className={styles.HomePage}>
                {books &&
                    books.map((book) => {
                        return (
                            <ProductCard
                                id={book.id}
                                title={book.title}
                                published={book.published}
                                cover={book.cover}
                                price={book.price}
                                key={book.id}
                                quantity={book.quantity}
                            />
                        );
                    })}
            </section>
        </div>
    );
};

export default HomePage;
