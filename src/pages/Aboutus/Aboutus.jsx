import React from 'react';
import './Aboutus.css';
import Navbar from '../../Components/Navbar';
import AboutImg from '../../assets/great+films.webp';

function Aboutus() {
    return (
        <>
        <div className="about__wrapper">
            <div className="about__content">
                <h1 className="about__title">About Movie Search</h1>
                <p className="about__lead">
                    Built by movie lovers, for movie lovers.
                </p>
                <p className="about__text">
                    Movie Search started as a simple idea: finding out more about a film shouldn't take five different tabs and a login. We wanted one clean place to search, browse, and dig into the details that actually matter — the cast, the release date, the plot, all in one spot.
                </p>
                <p className="about__text">
                    Whether you're trying to remember the name of that movie you half-watched on a plane, settling a debate about a release year, or just falling down a late-night movie rabbit hole, we built this to make that search fast and painless.
                </p>
                <p className="about__text">
                    We're constantly adding new features — think watchlists, ratings, and personalized recommendations down the line. For now, we hope you enjoy exploring.
                </p>
            </div>
            <div className="about__image-wrapper">
                <img src={AboutImg} alt="Collage of movie posters" className="about__image" />
            </div>
        </div>
        </>
    )
}

export default Aboutus;