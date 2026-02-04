import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Books from "./Books";
import Rented from "./Rented";
import RentPopup from "./RentPopup";
import {WarningPopupProvider} from "./WarningPopupContext";
import GlobalPopups from "./GlobalPopups";
import "./style.css";
import ContactUs from "./ContactUs";


function App() {
  const [rentedBooks, setRentedBooks] = useState(() => {
  const storedBooks = localStorage.getItem("rentedBooks");
  return storedBooks ? JSON.parse(storedBooks) : []; });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
      localStorage.setItem("rentedBooks", JSON.stringify(rentedBooks));
    }, [rentedBooks]);

  const addRentedBook = (bookDetails) => {
    setRentedBooks(prev => [...prev, bookDetails]);
  };

  const removeRentedBook = (startTime) => {
    setRentedBooks(prev => prev.filter(book => book.customer.startTime !== startTime));
  };

  const openPopup = (book) => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedBook(null);
    setIsPopupOpen(false);
  }

  return (
    <WarningPopupProvider>
    <GlobalPopups rentedBooks={rentedBooks}></GlobalPopups>
    <Router>
    <Header> </Header>
    <Routes>
      <Route path="/" element={<Books openPopup={openPopup}></Books>}></Route>
      <Route path="/rented" element={<Rented rentedBooks={rentedBooks} removeRentedBook={removeRentedBook}></Rented>}> </Route>
      <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
      </Routes>
    { isPopupOpen && (
        <RentPopup
          onClose={closePopup}
          addRentedBook={addRentedBook}
          selectedBook={selectedBook}
        />
      )
    }
    </Router>
    </WarningPopupProvider>
  );
}

export default App;
