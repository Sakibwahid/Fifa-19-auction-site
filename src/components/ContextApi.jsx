import React, { useState, useEffect, createContext } from "react";

export const ContextApi = createContext();

export const ContextApiProvider = ({ children }) => {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
    const [bidding, setBidding] = useState("");
    const [maxrating, setMaxRating] = useState("");
    const [error, setError] = useState(false);
    const [selectedplayerarray, setSelectedPlayerArray] = useState([]);

    useEffect(() => {
        const savedDate = localStorage.getItem("date");
        const savedNumber = localStorage.getItem("number");
        const savedMaxRating = localStorage.getItem("maxrating");
        const savedBidding = localStorage.getItem("bidding");
        if (savedDate) {
            setDate(savedDate);
        }
        if (savedNumber) {
            setNumber(savedNumber);
        }
        if (savedBidding) {
            setBidding(savedBidding);
        }
        if (savedMaxRating) {
            setMaxRating(savedMaxRating);
        }
       
    }, []);
    const handleSubmit = (e) => {
        localStorage.setItem("date", date);
        localStorage.setItem("number", number);
        localStorage.setItem("bidding", bidding);
        localStorage.setItem("maxrating", maxrating);
        e.preventDefault();
        if (date === "" || number === "" || bidding === "" || maxrating === "") {
            setError("Please fill all the fields!!");
        }
        else {
            setError(null);
            setTimeout(
                () => {
                    window.location.href = "/auctionpage";
                },
                1000
            )
        }
    };
    return (
        <ContextApi.Provider value={{ date, setDate, number, setNumber, bidding, setBidding, maxrating, setMaxRating, error, setError, handleSubmit, selectedplayerarray, setSelectedPlayerArray }} >
            {children}
        </ContextApi.Provider>
    )
}