function WarningPopup({ rentedDetails, onClose }) {
  return (
    <div className="warning-popup">
      <button className="warning-popup-closing-button" onClick={onClose}>
        X
      </button>
      <h2>Warning!</h2>
      <p>
        The book "{rentedDetails.book.title}" by {rentedDetails.book.author} has
        less than 24 hours left!
      </p>
      <p>Renter: {rentedDetails.customer.name}</p>
    </div>
  );
}

export default WarningPopup;
