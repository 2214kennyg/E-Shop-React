import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./container/HomePage/HomePage";
import { getAllBooks } from "./services/books";
import { useState, useEffect } from "react";
import ProductPage from "./container/ProductPage/ProductPage";
import Nav from "./components/Nav/Nav";

function App() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        // console.log(getAllBooks());
        const wrapper = async () => {
            const allBooks = await getAllBooks();
            setBooks(allBooks);
        };
        wrapper();
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<HomePage books={books} />} />
                    <Route path="/:id" element={<ProductPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
