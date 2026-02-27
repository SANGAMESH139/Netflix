import React, { useState, useEffect } from "react";
import axios from "../api/axios";

// Since we are using OMDB instead of TMDB (as user key was OMDB), we only have direct posters.
// OMDB returns a list of results in data.Search when we search.
function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                // OMDB Search array
                if (request.data && request.data.Search) {
                    setMovies(request.data.Search);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="ml-5 text-white">
            <h2 className="text-xl font-bold mt-4">{title}</h2>

            <div className="flex overflow-y-hidden overflow-x-scroll scrollbar-hide p-5 whitespace-nowrap scroll-smooth">
                {movies.map(
                    (movie) =>
                        // Ensure movie has a poster
                        movie.Poster && movie.Poster !== "N/A" && (
                            <img
                                key={movie.imdbID}
                                className={`object-contain transition-transform duration-300 mr-2 w-full hover:scale-105 opacity-90 hover:opacity-100 ${isLargeRow ? "max-h-64" : "max-h-28"
                                    }`}
                                src={movie.Poster}
                                alt={movie.Title}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default Row;
