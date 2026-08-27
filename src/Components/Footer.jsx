import React from 'react';
import './Footer.css';
import NavLogo from '../assets/NavLogo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer__wrapper">
            <div className="footer__top">
                <div className="footer__brand">
                    <img src={NavLogo} alt="Movie Search logo" className="footer__logo" />
                    <p className="footer__tagline">
                        Your next favorite movie is one search away.
                    </p>
                </div>

                <div className="footer__links">
                    <div className="footer__column">
                        <h4 className="footer__heading">Explore</h4>
                        <Link className="footer__link" to="/">Home</Link>
                        <Link className="footer__link" to="/aboutus">About us</Link>
                        
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Resources</h4>
                        <a className="footer__link" href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb API</a>
                        <a className="footer__link" href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__heading">Follow</h4>
                        <a className="footer__link" href="#">Instagram</a>
                        <a className="footer__link" href="#">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copy">© {new Date().getFullYear()} Movie Search. All rights reserved.</p>
                <p className="footer__credit">Built with React & the OMDb API</p>
            </div>
        </footer>
    )
}

export default Footer;