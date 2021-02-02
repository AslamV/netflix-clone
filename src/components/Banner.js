import React, { useState, useEffect } from 'react'
import instance from './axios';
import request from './request';
import './banner.css'
function Banner() {
    const [movie, setmovie] = useState([]);
    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + '...' : str
    }
    useEffect(() => {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          };
        const fetchData = async () => {
            const result = await instance.get(request.netflixOrg);
            const max = result.data.results.length;
            console.log(max);
            setmovie(result.data.results[getRandomInt(max)]);
        }
        fetchData();
    }, []);
    return (
        <header className='banner'
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center"
        }}
        >
            <div className="banner-content">
                <h1 className='banner-title'>{movie?.name}</h1>
                <div className="banner-button">
                    <button className="btn">Play</button>
                    <button className="btn">My Playlist</button>
                </div>
    <h1 className="banner-desp">{truncate(movie.overview,150)}</h1>
            </div>
            <div className="fade-banner"></div>
        </header>
    )
}

export default Banner
