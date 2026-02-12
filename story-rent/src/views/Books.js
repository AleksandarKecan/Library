import { useState } from "react";
import DetailsPopup from "../components/Popups/DetailsPopup";


function Books({ openPopup, availableBooks, selectedGenre }) {
  const [books] = useState([
    {
      title: "The complete stories",
      author: "Franz Kafka",
      image: "/SlikeKnjiga/Kafka.jpg",
      description: "Zbira prica koje istrazuju osecaj otudjenosti, krivice i apsurda modernog svijeta.",
      availableBooks: true,
      genre: "Novel",
    },
    {
      title: "Vreme cuda",
      author: "Borislav Pekic",
      image: "/SlikeKnjiga/VremeCuda.jpeg",
      description: "Roman koji preispituje biblijska cuda iz ugla gledanja covijeka iz modernog doba.",
      availableBooks: true,
      genre: "Novel",
    },
    {
      title: "Tumacenje snova",
      author: "Sigmund Frojd",
      image: "/SlikeKnjiga/tumacenjeSnova.jpeg",
      description: "Tumacenje snova kao put do nesvijesnih i potisnuti zelja.",
      availableBooks: true,
      genre: "Novel",
    },
    {
      title: "Kad padne noc",
      author: "Haruki Murakami",
      image: "/SlikeKnjiga/kadPadneNoc.jpeg",
      description: "Tokio, noc, zivoti nasih likova se povezuju kroz usamljenost.",
      availableBooks: true,
      genre: "Novel",
    },
    {
      title: "Menon",
      author: "Platon",
      image: "/SlikeKnjiga/Menon.jpeg",
      description: "Teorija da je znanje ustvari sijecanje nase duse i nasih predaka.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Metafizika",
      author: "Aristotel",
      image: "/SlikeKnjiga/Metafizika.jpeg",
      description: "Pitanje postojanja bica, uzrok i sustina.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Bozanstvena komedija",
      author: "Dante Alighieri",
      image: "/SlikeKnjiga/BozanstvenaKomedija.jpeg",
      description: "Danteova potraga za ljubavi kroz raj i cistiliste do najdubljih dijelova pakla.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Preobrazaj",
      author: "Franz Kafka",
      image: "/SlikeKnjiga/Preobrazaj.jpeg",
      description: "Prica o covijeku koji se jedno jutro probudio kao insekt.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Drzava",
      author: "Platon",
      image: "/SlikeKnjiga/Drzava.jpeg",
      description: "Filozofski pogled na pravdu, drzavu i njeno drustvo.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Dvorac",
      author: "Franz Kafka",
      image: "/SlikeKnjiga/Dvorac.jpeg",
      description: "Roman o covijeku koji se suocava sa uzaludnom birokratijom i njenim smislom.",
      availableBooks: true,
      genre: "Roman",
    },
    {
      title: "Fizika",
      author: "Aristotel",
      image: "/SlikeKnjiga/Fizika.jpeg",
      description: "Pokusaj da se obijasni priroda, njeno kretanje kao i vrijeme i njegove promijene.",
      availableBooks: true,
      genre: "Sci-Fi",
    },
    {
      title: "Iznad dobra i zla",
      author: "Friedrich Nietzsche",
      image: "/SlikeKnjiga/IznadDobra.jpeg",
      description: "Precijenjenost slobode i individualnog misljenja svakog pojedinca u jednom drustvu.",
      availableBooks: true,
      genre: "Sci-Fi",
    },
    {
      title: "Proces",
      author: "Franz Kafka",
      image: "/SlikeKnjiga/Proces.jpeg",
      description: "Hapsenje i sudjenje jednom covijeku od strane nevidljivog suda.",
      availableBooks: true,
      genre: "Sci-Fi",
    },
    {
      title: "Retorika",
      author: "Aristotel",
      image: "/SlikeKnjiga/Retorika.jpeg",
      description: "Analiza emocija, argumenata i ubedjivanja govornika.",
      availableBooks: true,
      genre: "Sci-Fi",
    },
    {
      title: "San",
      author: "Sigmund Frojd",
      image: "/SlikeKnjiga/San.jpeg",
      description: "Frojdove ideje o snovima, kao da su zelje i nasi unutarnji konflikti",
      availableBooks: true,
      genre: "Sci-Fi",
    },
  ]);

  const [openDetailsPopup, setOpenDetailsPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = selectedGenre === "All"
    ? books
    : books.filter(book => book.genre === selectedGenre);

  return (
    <>
      <div className="books-container">
        {filteredBooks.map((book, index) => {
          const isBookAvailable = availableBooks.includes(book.title);

          return (
            <div className={`book ${isBookAvailable ? "" : "is-rented"}`} key={index}>
              <h3 className="book-author">{book.author}</h3>
              <h4 className="book-title">{book.title}</h4>
              <img className="book-image" src={book.image} alt={book.title}></img>
              <div className="book-genre">
                <span className={`genre-tag genre-${book.genre.toLowerCase()}`}>
                  {book.genre}
                </span>
              </div>
              <div className={`availability ${isBookAvailable ? "available" : "rented"}`}>
                {isBookAvailable ? "Available" : "Rented"}
              </div>

              <div className="book-button">
                <button className="rent-button" onClick={() => openPopup(book)} disabled={!isBookAvailable}>
                  {isBookAvailable ? "Rent" : "Rented"}
                </button>
                <button
                  className="details-button"
                  onClick={() => {
                    setSelectedBook(book);
                    setOpenDetailsPopup(true);
                  }}>
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {openDetailsPopup && selectedBook && (
        <DetailsPopup onClose={() => { setOpenDetailsPopup(false); setSelectedBook(null); }}
          book={selectedBook} ></DetailsPopup>
      )}
    </>
  );
}

export default Books;
