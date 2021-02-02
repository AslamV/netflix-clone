import React from 'react';
import '../App.css';
import request from './request';
import Row from './Row';
import Nav from './Nav';
import Banner from './Banner';


function Landing(){
	return (
		<div className="App">
            <Nav />
			<Banner />
			<Row title="NETFLIX ORGINALS" fetchUrl={request.netflixOrg} isLargeRow isSeries />
			<Row title="Top Rated" fetchUrl={request.topRated} />
			<Row title="Trending" fetchUrl={request.trending} />
			<Row title="Action Movies" fetchUrl={request.actionMovies} />
			<Row title="Horror Movies" fetchUrl={request.horrorMovies} />
			<Row title="Comedy Movies" fetchUrl={request.comedyMovies} />
			<Row title="Documentary Movies" fetchUrl={request.documentMovies} />
		</div>
	);
}

export default Landing;
