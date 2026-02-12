import { useState } from "react";

function RentPopup({ onClose, addRentedBook, selectedBook }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedBook) return;

    const rentedDetails = {
      book: selectedBook,
      customer: { name, phone, email, day: Number(day), startTime: Date.now() },
    };
    addRentedBook(rentedDetails);
    onClose();
  };

  return (
    <>
      <div className="rent-overlay" onClick={onClose}></div>
      <div className="rent-popup" onClick={e => e.stopPropagation()}>
        <button className="closing-rent-button" onClick={onClose}>
          X
        </button>
        <h1>Rent form</h1>

        {selectedBook && (
          <div className="selected-book">
            <h3>{selectedBook.author}</h3>
            <h4>{selectedBook.title}</h4>
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              width="100"></img>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Name:</label>
            <input
              required
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}>

            </input>
          </div>

          <div className="form-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              required
              type="tel"
              name="phone-number"
              pattern="[0-9]*"
              inputMode="numeric"
              value={phone}
              onChange={e => setPhone(e.target.value)}>
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="email-address">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}>
            </input>
          </div>

          <div className="form-gropu">
            <select required value={day} onChange={e => setDay(e.target.value)}>
              <option value={""} disabled>
                How many days?
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"7"}>7</option>
              <option value={"8"}>8</option>
              <option value={"9"}>9</option>
              <option value={"10"}>10</option>
            </select>
          </div>
          <button className="submit-rent-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RentPopup;
