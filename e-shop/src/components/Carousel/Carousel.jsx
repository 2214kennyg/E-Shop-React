import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.scss";

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className={styles.img}
                    src="https://m.media-amazon.com/images/I/71rOkFGVDXL.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img}
                    src="https://m.media-amazon.com/images/I/51eZ85LAZfL.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img}
                    src="https://m.media-amazon.com/images/I/51bPSpzyc2L.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img}
                    src="https://m.media-amazon.com/images/I/41CEBZV94RL.jpg"
                    alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img}
                    src="https://m.media-amazon.com/images/I/51NSUfLiZ0L._SX354_BO1,204,203,200_.jpg"
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;
