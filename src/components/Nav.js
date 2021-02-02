import React, { useState, useEffect } from 'react';
import './nav.css';
function Nav(){
	const [ show, setshow ] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setshow(true);
			} else {
				setshow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);
	return (
		<div className={show ? 'navb' : 'nav'}>
			<img
				className="nav-logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/375px-Netflix_2015_logo.svg.png"
				alt=""
			/>
			<img
				className="nav-icon"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbmtsouvHnVXr-hFPngW-z7xIDx9t65Ldm6Q&usqp=CAU"
				alt=""
				srcset=""
			/>
		</div>
	);
}

export default Nav;
