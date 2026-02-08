import { createContext, useContext, useState } from "react";

const WarningPopupContext = createContext();

export function useWarningPopup() {
    return useContext(WarningPopupContext);
}
export function WarningPopupProvider({ children }) {
    const [popups, setPopups] = useState([]);

const showPopup = (rentedDetails) => {
    setPopups(prev => {
        if (!prev.find(p => p.customer.startTime === rentedDetails.customer.startTime)) {
            return [...prev, rentedDetails];
        }
        return prev;
    });
};

const hidePopup = (startTime) => {
    setPopups(prev => prev.filter(p => p.customer.startTime !== startTime));
};

return (
    <WarningPopupContext.Provider value={{ popups, showPopup, hidePopup }}>
        {children}
    </WarningPopupContext.Provider>
);
}
