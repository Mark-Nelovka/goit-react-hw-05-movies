import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import s from './Cast.module.css';

const KEY = '35d12bb42e646b3da19939eafb14620b';

function Cast() {
    const [acters, setacters] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`).then((res) => {
            setacters(res.data.cast)
            // console.log(res.data.cast)
        })
    }, [movieId])

    return (
    <>
        { acters && acters.map(({id, profile_path, name, character }) => {
            return <ul key={id}><li className={s.containerImage}>
                <img
                    src={profile_path}
                    alt={name}
                    width="150"
                    height="250"
                />
                    </li>
                <li className={s.listItem}>Name: {name}</li>
                <li className={s.listItem}>Character: {character}</li>
                </ul>
            })}
    </>
    )
}

export default Cast;