import { useEffect, useState } from "react";


function Rented ({ rentedBooks, removeRentedBook }) {
    
    const [timeLeft, setTimeLeft] = useState([]);

    const calculateTimeLeft = () => {
        return rentedBooks.map((rentedDetails) => {
        const endTime = rentedDetails.customer.startTime + rentedDetails.customer.day * 24 * 60 * 60 * 1000;
        const restTime = endTime - Date.now();
        const daysLeft = Math.floor(restTime / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((restTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((restTime % (1000 * 60 * 60)) / (1000 * 60));
                
        return {
                    days: Math.max(daysLeft, 0),
                    hours: Math.max(hoursLeft, 0),
                    minutes: Math.max(minutesLeft, 0),
                };
            });
        };

        useEffect(() => {
            setTimeLeft(calculateTimeLeft());

        const interval = setInterval (() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
            return () => clearInterval(interval);
    },[rentedBooks]);
    
    return(
        <div>
            <h1>Rented Books</h1>
            {rentedBooks.map((item, index) => (
                <div key={index} className="rented-book">
                    {item.book ? ( 
                        <>
                    <img src={item.book.image} alt={item.book.title} width="100"></img>
                    <h3>{item.book.title}</h3>
                    <h4>{item.book.author}</h4>
                        </>
                    ) : (
                        <p>No book info</p>
                    )}
                    {item.customer && (
                        <div className="customer-info">
                            <p>Name: {item.customer.name}</p>
                            <p>Phone Number: {item.customer.phone}</p>
                            <p>Email: {item.customer.email}</p>
                            <p>Days rented: {item.customer.day}</p>
                            {timeLeft[index] && (
                            <p>
                            Time left: {timeLeft[index].days} Days {timeLeft[index].hours} Hours {timeLeft[index].minutes} Minutes
                            </p>  
                        )}
                        <button onClick={() => removeRentedBook(item.customer.startTime)}>X Remove</button>
                    </div>
                )}
            </div>
        ))}
     </div>
    );
}

export default Rented;