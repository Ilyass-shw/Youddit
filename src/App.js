import React from "react";
import NavBar from "./app/NavBar";
import { FilterBar } from "./features/FilterBar/FilterBar";
import Header from './features/Header/Header.js'
import PostsList from "./features/PostsList/PostsList";
import './App.css'
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div  className='App-container'>
		<NavBar />
		<Header/>
		<FilterBar/>
		<PostsList/>
		</div>
	);
}

export default App;
