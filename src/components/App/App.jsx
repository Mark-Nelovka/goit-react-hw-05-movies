// import axios from "axios";
// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigations/Navigation";
import HomePage from '../HomePage/HomePage';
import MoviesPage from '../MoviesPage/MoviesPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

function App () {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
      
};

export default App;