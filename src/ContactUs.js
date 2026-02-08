import { useState } from "react";

function ContactUs () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contactUs-page">
            <div className="contactUs-left">
            <h1>Contact us!</h1>
            <form className="contactUs-form" onSubmit={handleSubmit}>
                <label for="name">Name:</label>
                <input type="text" name="name" required></input>
                <label for="email">E-mail</label>
                <input type="text" name="email" required></input>
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