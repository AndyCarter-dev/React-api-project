import React, { useState } from 'react';
import './Landing.css'
import Navbar from '../../Components/Navbar';
import { useNavigate } from 'react-router-dom';

function Landing() {
const [search, setSearch] = useState('');
const navigate = useNavigate()

    function onSearch(){
        navigate(`/home/${search}`)
    }
   return(
    <>
    <h1>FINAL TEST 999</h1>
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
    </>
)

}

export default Landing;
