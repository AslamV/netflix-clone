const API = '719944d4c67075197ac4549527bf9438';

const request = {
    topRated:  `/movie/top_rated?api_key=${API}&language=en-US&page=1`,
    trending:  `/trending/all/week?api_key=${API}&language=en-US&page=1 `,
    netflixOrg:  `/discover/tv?api_key=${API}&with_networks=213`,
    actionMovies:  `/discover/movie?api_key=${API}&with_genres=28`,
    comedyMovies:  `/discover/movie?api_key=${API}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    documentMovies: `/discover/movie?api_key=${API}&with_genres=99`,
    romanceMovies:   `/discover/movie?api_key=${API}&with_genres=10749`
}

export default request;