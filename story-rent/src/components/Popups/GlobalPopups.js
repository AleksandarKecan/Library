import { useEffect, useRef } from "react";
import WarningPopup from "./WarningPopup";
import { useWarningPopup } from "./WarningPopupContext";

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function GlobalPopups({ rentedBooks }) {
  const { popups, showPopup, hidePopup } = useWarningPopup();
  const warnedRef = useRef(new Set());

  useEffect(() => {
    if (!rentedBooks || rentedBooks.length === 0) return;

    const checkExpiringBooks = () => {
      rentedBooks.forEach(book => {
        const endTime =
          book.customer.startTime + book.customer.day * ONE_DAY_MS;
        const timeLeft = endTime - Date.now();
        const key = book.customer.startTime;

        if (
          timeLeft > 0 &&
          timeLeft <= ONE_DAY_MS &&
          !warnedRef.current.has(key)
        ) {
          showPopup(book);
          warnedRef.current.add(key);
        }
        if (timeLeft <= 0) {
          warnedRef.current.delete(key);
        }
      });
    };
    const interval = setInterval(checkExpiringBooks, 10000);
    return () => clearInterval(interval);
  }, [rentedBooks, showPopup]);

  return (
    <div className="global-popups">
      {popups.map(book => (
        <WarningPopup
          key={book.customer.startTime}
          rentedDetails={book}
          onClose={() => hidePopup(book.customer.startTime)}></WarningPopup>
      ))}
    </div>
  );
}

export default GlobalPopups;
