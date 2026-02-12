import { useState } from "react";

function ContactUs() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target["message-input"].value
    };

    console.log("Saljem podatke:", formData);

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log("Odgovor od API-ja: ", data);

      setSubmit(true);
      e.target.reset();
    } catch (error) {
      console.error("Greska", error);
      alert("Doslo je do greske pri slanju poruke.");
    }
  }

  return (
    <div className="contactUs-page">
      <div className="contactUs-left">
        <h1>Contact us!</h1>
        <form className="contactUs-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required></input>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" required></input>
          <label htmlFor="message"> Message</label>
          <textarea type="text" name="message-input" required></textarea>
          <button type="submit">Submit</button>
          {submit && <p className="success-msg">Your message has been sent!</p>}
        </form>
      </div>

      <div className="contactUs-right">
        <h1>Let us know!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export default ContactUs;