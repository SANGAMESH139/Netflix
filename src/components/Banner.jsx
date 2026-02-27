import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import requests from "../api/requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                if (request.data && request.data.Search) {
                    // Select a random movie to feature
                    const randomMovie =
                        request.data.Search[
                        Math.floor(Math.random() * request.data.Search.length - 1)
                        ] || request.data.Search[0];

                    setMovie(randomMovie);
                }
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        }
        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

    return (
        <header
            className="text-white object-contain h-[448px] bg-cover bg-center"
            style={{
                backgroundImage: `url("${movie?.Poster !== "N/A" ? movie?.Poster : "https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg"
                    }")`,
            }}
        >
            <div className="ml-8 pt-[140px] h-[190px]">
                <h1 className="text-5xl font-extrabold pb-[0.3rem]">
                    {movie?.Title || movie?.name || movie?.original_name}
                </h1>

                <div className="flex mt-2">
                    <button className="cursor-pointer font-semibold outline-none border-none rounded-[0.2vw] px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition-all bg-white text-black">
                        Play
                    </button>
                    <button className="cursor-pointer font-semibold outline-none border-none rounded-[0.2vw] px-8 py-2 mr-4 bg-[rgba(51,51,51,0.5)] hover:text-black hover:bg-[#e6e6e6] transition-all">
                        My List
                    </button>
                </div>

                <h1 className="w-[45rem] leading-[1.3] pt-4 text-[0.8rem] max-w-[360px] h-20 shadow-md">
                    {truncate(movie?.Title + " is a highly anticipated movie starring popular actors and bringing intense action directly to your screen! (Simulated summary since OMDB search only returns minimal details).", 150)}
                </h1>
            </div>

            <div className="h-[118px] banner--fadeBottom mt-auto" />
        </header>
    );
}

export default Banner;
