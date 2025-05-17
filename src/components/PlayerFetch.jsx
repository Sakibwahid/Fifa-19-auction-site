import { useState, useEffect } from "react";
import Papa from "papaparse";
import axios from "axios";

const PlayerFetch = ({ SearchedPosition, SearchedRating }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/FIFA19.csv", { responseType: "blob" });

                const reader = new FileReader();
                reader.onload = () => {
                    Papa.parse(reader.result, {
                        header: true,
                        dynamicTyping: true,
                        complete: (result) => {
                            const filteredData = result.data.filter((player) => {
                                const position = player["Position"];
                                const overall = player["Overall"]; // Ensure key is correct
                                
                                return SearchedPosition === "All players"
                                    ? overall >= SearchedRating
                                    : position === SearchedPosition && overall >= SearchedRating;
                            });
                            setData(filteredData);
                        },
                        error: (err) => {
                            console.error("Parsing Error:", err);
                            setError(err.message);
                        },
                    });
                };

                reader.readAsText(response.data);
            } catch (err) {
                console.error("Fetching Error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [SearchedPosition, SearchedRating]);

    return { data, loading, error };
};

export default PlayerFetch;
