import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";

const KEY = '35d12bb42e646b3da19939eafb14620b';

function MovieDetailsPage() {
    const [filmDetails, setfilmDetails] = useState({
        id: 0,
        title: '',
        average: 0,
        img: "",
    })
        
    const  { movieId }  = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`).then((res) => {
            setfilmDetails({
                id: res.data.id,
                title: res.data.original_title,
                average: res.data.vote_average,
                img: res.data.poster_path,
            })
            // console.log(res.data)
    });
    }, [movieId])
    const { title, img, id } = filmDetails;
    // console.log(id)
    return (
        
        <>
            <Link to={'/'}>
                <button type="button">Go back</button>
            </Link>
            <li>{title}</li>
            <img src={img} alt={title} />
            
            

            {/* {filmDetails ? filmDetails.map(({title, average, img, id}) => {
                console.log(id)
                return <>
                    <li key={id}>{title}
                        <img src={img} alt={title} />
                    </li>
                    
                    </>
            }) : null} */}
        
        
            
        
        </>
    )
}
export default MovieDetailsPage;