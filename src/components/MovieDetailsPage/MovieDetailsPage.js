import { useEffect, useState } from 'react';
import { useParams, Link, NavLink, Routes, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import axios from "axios";
import s from './MovieDetailsPage.module.css';

const KEY = '35d12bb42e646b3da19939eafb14620b';

function MovieDetailsPage() {
    const [filmDetails, setfilmDetails] = useState({
        id: 0,
        title: '',
        average: 0,
        img: "",
        overview: '',
        genres: [],
    })
        
    const { movieId } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`).then((res) => {
            setfilmDetails({
                id: res.data.id,
                title: res.data.original_title,
                average: res.data.vote_average,
                img: res.data.poster_path,
                overview: res.data.overview,
                genres: res.data.genres,
            })
    });
    }, [movieId])
    const { title, img, average, overview, genres } = filmDetails;
    return (
        
        <>
            <Link to={'/'}>
                <button type="button">Go back</button>
            </Link>
            <div className={s.containerContent}>
                <div className={s.containerImage}>
                    <img
                src={img}
                alt={title}
                width="300"
                height="400"
                />
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>User score: {average}</p>
                    <h2 className={s.overview}>Overview</h2>
                    <p>{overview}</p>
                    <h2 className={s.genres}>Genres</h2>
                    <ul className={s.list}>
                    {genres && genres.map(({id, name}) => {
                        return  <li key={id} className={s.listItem}>{name}</li>
                    })} 
                        </ul>
                </div>
            </div>
            <hr />
            <p>Additional information</p>
            <ul>
                <NavLink className={s.listNavLink} to="cast">Cast</NavLink>
                <NavLink className={s.listNavLink} to="reviews">Reviews</NavLink>
            </ul>            
            <hr />
            <Routes>
                <Route path="/cast" element={<Cast />} />
                <Route path="/reviews" element={<Reviews />} />
            </Routes>
        </>
    )
}
export default MovieDetailsPage;