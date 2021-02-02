import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core'
import Mbanner from './Mbanner';
import './banner.css';
function Card() {
    const [movie, setmovie] = useState([]);
    const [dat, setdat] = useState({})
    const API = '719944d4c67075197ac4549527bf9438';
    const {id} = useParams();
    const imgUrl = 'https://image.tmdb.org/t/p/original/';
    const truncate = (str,n) => {
        return str?.length > n ? str.substr(0,n-1) + '...' : str
    };
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API}&language=en-US`);
            const d = result.data
            const get = {
                name: d.name || d.title,
                genr: d.genres[0].name,
            };
            setdat(get);
            console.log(dat);
            console.log(d);
            setmovie(result.data);
        }
        fetchData();
    }, []);
    
    return (
        <div className='m-card'>
            <header className='banner'
        style={{
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center"
        }}
        >
            <div className="banner-content">
                <h1 className='banner-title'>{movie?.name || movie?.title}</h1>
                <div className="banner-button">
                    <button className="btn">Play</button>
                    <button className="btn">My Playlist</button>
                </div>
    <h1 className="banner-desp">{truncate(movie.overview,150)}</h1>
            </div>
            <div className="fade-banner"></div>
        </header>
        <div className="row rrow">
              <div className="col-md-2 ">
              <img height='250px' width='150px' src={`${imgUrl}${ movie.poster_path}`}alt=""/>
              <Button className='mt' variant="contained" color="primary">Watch Trailer</Button>
              </div>
              <div className="col-md-5">
                <h2 className="mb-4">{movie.name || movie.title}</h2>
                <ul className="list-group grow">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {dat.genr}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {movie.release_date}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {movie.vote_average}
                  </li>
                  <li className="list-group-item">
                    <strong>Popularity:</strong> {movie.popularity}
                  </li>
                  <li className="list-group-item">
                    <strong>Production:</strong> {movie.name}
                  </li>
                  <li className="list-group-item">
                    <strong>Runtime:</strong> {movie.runtime}
                  </li>
                  <li className="list-group-item">
                    <strong>Revenue:</strong> {movie.revenue}
                  </li>
                </ul>
              </div>
            </div>
        </div>
    );
}

export default Card
