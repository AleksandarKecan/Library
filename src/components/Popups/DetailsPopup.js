function DetailsPopup({ onClose, book }) {
  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="details-popup">
        <h2 className="title">{book.title}</h2>
        <img src={book.image} alt={book.title}></img>
        <h3>{book.author}</h3>
        {
          book.genre && (
            <div className="book-genre">
              <span className={`genre-tag genre-${book.genre.toLowerCase()}`}>
                {book.genre}
              </span>
            </div>
          )
        }
        <p className="description">{book.description}</p>
        <button className="closing-button" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
}

export default DetailsPopup;
