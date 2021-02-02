import React, { useState, useEffect } from 'react';
import instance from './axios';
import './row.css';
import Youtube from 'react-youtube';
import { Link } from 'react-router-dom';
const movieTrailer = require('movie-trailer');
const imgUrl = 'https://image.tmdb.org/t/p/original/';
export default function Row({ title, fetchUrl, isLargeRow , isSeries }){
    const [ movies, setmovies ] = useState([]);
    const [ trailer, settrailer ] = useState('');

	const imgS = 'img-poster';
	const imgL = 'img-posterL';
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1
		}
	};
	const showTrailer = (movie) => {
		if (trailer) {
			settrailer('');
		} else {
			 movieTrailer(movie?.name || movie?.title)
				.then((url) => {
                    const Url = url;
					const params = (new URL(Url)).searchParams;
                    const name = params.get('v')
                    settrailer(name);
				})
				.catch(() => {
                    alert('No Trailer Found')
                });
		}
    };


	useEffect(
		() => {
			const fetchData = async () => {
				const request = await instance.get(fetchUrl);

				setmovies(request.data.results);
				return request;
			};
			fetchData();
		},
		[ fetchUrl ]
	);

	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row_poster">
                {movies.map((movie) => {
                    if(isSeries) {
                        return(
                            
<img
className={imgL}
key={movie.id}
onClick={
() => {
showTrailer(movie)
}
}
src={`${imgUrl}${isLargeRow
? movie.poster_path
: movie.backdrop_path}`}
alt=""
/>

                        )
                    }
                    else {
                        return (
                            <Link to={'/movie/' + movie.id}>
<img
className={imgS}
key={movie.id}
onClick={
() => {
 
}
}
src={`${imgUrl}${isLargeRow
? movie.poster_path
: movie.backdrop_path}`}
alt=""
/>
</Link>
                        )
                    }
                
                }
                )}
			</div>
            {trailer && <Youtube videoId={trailer} opts={opts} />}
            
		</div>
	);
}
