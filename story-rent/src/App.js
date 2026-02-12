import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Books from "./views/Books";
import Rented from "./views/Rented";
import RentPopup from "./components/Popups/RentPopup";
import { WarningPopupProvider } from "./components/Popups/WarningPopupContext";
import GlobalPopups from "./components/Popups/GlobalPopups";
import "./Style/style.css";
import ContactUs from "./views/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  const [rentedBooks, setRentedBooks] = useState(() => {
    const storedBooks = localStorage.getItem("rentedBooks");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [availableBooks, setAvailableBooks] = useState([
    "The complete stories", "Vreme cuda", "Tumacenje snova", "Kad padne noc", "Menon", "Metafizika", "Bozanstvena komedija", "Preobrazaj", "Drzava", "Dvorac", "Fizika", "Iznad dobra i zla", "Proces", "Retorika", "San"
  ]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    localStorage.setItem("rentedBooks", JSON.stringify(rentedBooks));
  }, [rentedBooks]);

  const addRentedBook = (bookDetails) => {
    setRentedBooks(prev => [...prev, bookDetails]);
    setAvailableBooks(prev => prev.filter(title => title !== bookDetails.book.title));
  };

  const removeRentedBook = (startTime) => {
    setRentedBooks(prev => {
      const bookToReturn = prev.find(book => book.customer.startTime === startTime);
      if (bookToReturn) {
        setAvailableBooks(prev => [...prev, bookToReturn.book.title]);
      }
      return prev.filter(book => book.customer.startTime !== startTime);
    });
  };


  const openPopup = book => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedBook(null);
    setIsPopupOpen(false);
  };

  return (
    <WarningPopupProvider>
      <GlobalPopups rentedBooks={rentedBooks}></GlobalPopups>
      <Router>
        <div className="app">
          <Header selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}>
          </Header>
          <Routes>
            <Route
              path="/"
              element={<Books openPopup={openPopup} availableBooks={availableBooks} selectedGenre={selectedGenre}></Books>}></Route>
            <Route
              path="/rented"
              element={
                <Rented
                  rentedBooks={rentedBooks}
                  removeRentedBook={removeRentedBook}></Rented>
              }>
            </Route>
            <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          </Routes>
          {isPopupOpen && (
            <RentPopup
              onClose={closePopup}
              addRentedBook={addRentedBook}
              selectedBook={selectedBook}
            />
          )}
          <Footer></Footer>
        </div>
      </Router>
    </WarningPopupProvider>
  );
}

export default App;
