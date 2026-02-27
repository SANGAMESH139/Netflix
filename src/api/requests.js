export const API_KEY = "1be1669f";

const requests = {
    fetchTrending: `?apikey=${API_KEY}&s=marvel&type=movie`,
    fetchNetflixOriginals: `?apikey=${API_KEY}&s=netflix&type=series`,
    fetchTopRated: `?apikey=${API_KEY}&s=batman&type=movie`,
    fetchActionMovies: `?apikey=${API_KEY}&s=action&type=movie`,
    fetchComedyMovies: `?apikey=${API_KEY}&s=comedy&type=movie`,
    fetchHorrorMovies: `?apikey=${API_KEY}&s=horror&type=movie`,
    fetchRomanceMovies: `?apikey=${API_KEY}&s=romance&type=movie`,
    fetchDocumentaries: `?apikey=${API_KEY}&s=documentary&type=movie`,
};

export default requests;
