import {useState} from "react";
import DetailsPopup from "./DetailsPopup";
import RentPopup from "./RentPopup";

function Books({ openPopup }) {

const books = [
    { title: "The complete stories", author: "Franz Kafka", image: "/SlikeKnjiga/Kafka.jpg"},
    { title: "Vreme cuda", author: "Borislav Pekic", image: "/SlikeKnjiga/VremeCuda.jpeg"},
    { title: "Tumacenje snova", author: "Sigmund Frojd", image: "/SlikeKnjiga/tumacenjeSnova.jpeg"},
    { title: "Kad padne noc", author: "Haruki Murakami", image: "/SlikeKnjiga/kadPadneNoc.jpeg"},
    { title: "Menon", author: "Platon", image: "/SlikeKnjiga/Menon.jpeg"},
    { title: "Metafizika", author: "Aristotel", image: "/SlikeKnjiga/Metafizika.jpeg"},
    { title: "Bozanstvena komedija", author: "Dante Alighieri", image: "/SlikeKnjiga/BozanstvenaKomedija.jpeg"}, 
    { title: "Preobrazaj", author: "Franz Kafka", image: "/SlikeKnjiga/Preobrazaj.jpeg"},
    { title: "Drzava", author: "Platon", image: "/SlikeKnjiga/Drzava.jpeg"},
    { title: "Dvorac", author: "Franz Kafka", image: "/SlikeKnjiga/Dvorac.jpeg"},
    { title: "Fizika", author: "Aristotel", image: "/SlikeKnjiga/Fizika.jpeg"},
    { title: "Iznad dobra i zla", author: "Friedrich Nietzsche", image: "/SlikeKnjiga/IznadDobra.jpeg"},
    { title: "Proces", author: "Franz Kafka", image: "/SlikeKnjiga/Proces.jpeg"},
    { title: "Retorika", author: "Aristotel", image: "/SlikeKnjiga/Retorika.jpeg"},
    { title: "San", author: "Sigmund Frojd", image: "/SlikeKnjiga/San.jpeg"}
];
const [ openDetailsPopup, setOpenDetailsPopup ] = useState(false);
const [ openRentPopup, setOpenRentPopup ] = useState(false);

    return(
        <>
        <div className="books-container">
            {books.map((book, index) => (
        <div className="book" key={index}> 
            <h3 className="book-author">{book.author}</h3>
            <h4 className="book-title">{book.title}</h4>
            <img className="book-image" src={ book.image } alt={book.title}></img>
        <div className="book-button">
            <button className="rent-button" 
            onClick={() => openPopup(book)}>
            Rent</button>
            <button className="details-button" onClick={ () => setOpenDetailsPopup(true)}>Details</button>
        </div>
        </div>
        ))}
        </div>
    
        { openDetailsPopup && <DetailsPopup onClose={ () => setOpenDetailsPopup(false)}></DetailsPopup>}
        { openRentPopup && <RentPopup onClose={ () => setOpenRentPopup(false) }></RentPopup> }
        </>
    
    );
}

export default Books;