import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Landingimg from '../../assets/great+films.webp'
import './Contact.css'

function Contact() {
  const [search, setSearch] = useState('');
const navigate = useNavigate()

    function onSearch(){
        navigate(`/home/${search.toLowerCase()}`)
    }
   return(
    <>
    <div className="landing__wrapper">
    <h1>Welcome to Movie Search! Find you next favorite Movie below!</h1>
    <input
        type='text'
        placeholder='Search Movies Here'
        value={search}
        className='input__search'
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
            if(event.key === 'Enter'){
                onSearch()
            }
        }}
    />
    <button className="search__btn" onClick={() => onSearch()}>Search</button>
    <img src={Landingimg} alt="Landing-img " className='landing__img'/>
    </div>
    </>
)
}

export default Contact 