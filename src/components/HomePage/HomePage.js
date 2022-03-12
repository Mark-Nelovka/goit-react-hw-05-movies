import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KEY = '35d12bb42e646b3da19939eafb14620b';

function HomePage() {
  const [homeMovies, setHomeMovies] = useState([]);
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`).then((res) => {
      setHomeMovies(res.data.results)
    });
  },[])
    return (
        <ul>
      {homeMovies.map((data) => {
        return <Link key={data.id} to={`movies/${data.id}`}><li>{data.title || data.original_name}</li></Link>
      })}
    </ul>
    )
}

export default HomePage;