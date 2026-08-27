import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useNavigate, useParams } from 'react-router-dom';
import './Movieinfo.css'
function Movieinfo () {
    const { id } = useParams()
    const navigate = useNavigate()
    const [Loading, setLoading ] = useState(true)
    const [Apidata, setApiData] = useState([])

async function fetchdata2 () {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    setApiData(data)
    console.log(data)
    setTimeout(() => {
  setLoading(false)
    }, 1000)
  

}

useEffect(() =>{
    fetchdata2()
},[id])


   return(
<>
{ Loading ? 
    <div className="movieinfo__loading">
        <div className="movieinfo__poster--skeleton"></div>
        <div className="movieinfo__details--skeleton">
            <div className="movieinfo__title--skeleton"></div>
            <div className="movieinfo__line--skeleton"></div>
            <div className="movieinfo__line--skeleton short"></div>
        </div>
    </div>
    : 
    <div className="movieinfo__wrapper">
        <img src={Apidata.Poster} alt={Apidata.Title} className="movieinfo__poster" />
        <div className="movieinfo__details">
            <h1 className="movieinfo__title">{Apidata.Title}</h1>
            <p className="movieinfo__meta">{Apidata.Year} • {Apidata.Genre} • {Apidata.Runtime}</p>
            <p className="movieinfo__plot">{Apidata.Plot}</p>
            <p className="movieinfo__crew"><strong>Director:</strong> {Apidata.Director}</p>
            <p className="movieinfo__crew"><strong>Actors:</strong> {Apidata.Actors}</p>
            <div className="movieinfo__ratings">
                {Apidata.Ratings.map((rating, index) => (
                    <div className="movieinfo__rating-badge" key={index}>
                        <span className="movieinfo__rating-source">{rating.Source}</span>
                        <span className="movieinfo__rating-value">{rating.Value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
}
<button className="movieinfo__back-btn" onClick={() => navigate(`/home/over`)}>← Back to Home</button>
</>
)
};

export default Movieinfo;