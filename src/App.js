import React from 'react';
import './App.css';
import request from './components/request';
import Row from './components/Row';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Landing from './components/Landing';


function App(){
	return (
		<BrowserRouter>
		<Switch>
			
			<Route exact path="/" component={Landing}/>
			<Route exact path="/movie/:id" component={Cards}/>
		</Switch>
		</BrowserRouter>
	);
}

export default App;
