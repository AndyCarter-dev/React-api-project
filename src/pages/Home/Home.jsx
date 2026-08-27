import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
import './Home.css'
import { useParams, useNavigate } from 'react-router-dom';
import Errorimg from '../../assets/Alt image.webp'

function Home (){
const navigate = useNavigate()
const [Data, setData ] = useState([])
const [Loading, setLoading] = useState(true)
const [Search, setSearch] = useState('')
const { searchTerm } = useParams();
const [Notfound, setNotFound] = useState(false)


async function fetchData(title) {
    setLoading(true)
     const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`;

    const { data } = await axios.get(url)
        if(data.Search !== undefined){
         setData(data.Search)
         console.log(data.Search)
         setNotFound(false)
        
    }

    else{
        setNotFound(true)
    }
    
     setTimeout(() => {
        setLoading(false)
    }, 1000)

}

function userSearch(){
    navigate(`/home/${Search.toLowerCase()}`)
    
}

useEffect(()=> {
    fetchData(searchTerm)
},[searchTerm])

return(
<>
<input
type='text' 
placeholder='Search Movies Here'
className='input__search'
value={Search}
onChange={(event) => setSearch(event.target.value)}
onKeyDown={(event) => {
    if(event.key === 'Enter'){
        userSearch()
    }
}}
/>
<button className="search__btn" onClick={() => userSearch()}>Search</button>
<div className="movie__grid">
    { Loading ? (
    new Array(6).fill(0).map((_, index) => (
        <div className="movie__card--skeleton" key={index}>
            <div className="movie__poster--skeleton"></div>
            <div className="movie__description--skeleton">
                <div className="movie__title--skeleton">loading</div>
                <div className="movie__para--skeleton"></div>
            </div>
        </div>
    ))
) : (
   Notfound ? (
    <div className="movie__notfound">
        <img src={Errorimg} alt="No results found" className="movie__notfound-img" />
        <h2 className="movie__notfound-title">No movies found</h2>
        <p className="movie__notfound-text">
            We couldn't find anything matching "{searchTerm}". Try checking the spelling or searching for something else.
        </p>
    </div>
) : (
        Data.slice(0, 6).map((movie, index) => (
            <div className="movie__card" onClick={() => navigate(`/movie/${movie.imdbID}`)} key={index}>
                <div className="movie__poster">
                    <img 
                        src={movie.Poster === "N/A" ? Errorimg : movie.Poster} 
                        alt={movie.Title}
                        onError={(event) => {
                            event.target.src = Errorimg
                        }}
                    />
                </div>
                <div className="movie__description">
                    <h2 className='movie__title'>Movie Title: {movie.Title}</h2>
                    <p className='movie__para'>Release Date: {movie.Year}</p>
                </div>
            </div>
        ))
    )
)}
</div>

</>
)
}

export default Home; 