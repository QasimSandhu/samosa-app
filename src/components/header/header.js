"use client";
import React, { useState, useEffect } from 'react';
import './style.css';
import WhiteButton from '../whiteButton';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isSticky ? 'header--sticky' : ''}`}>
            <div className="container">
                <div className="header__top-bar mb-6 pb-2 mb-6">
                    <ul className='header__contact-info d-flex align-items-center justify-content-between gap-6 m-0 p-0'>
                        <li><a href="mailto:info@samosafactory.de"><i className="fas fa-envelope" aria-hidden="true"></i> <span>info@samosafactory.de</span></a></li>
                        <li><a href="tel:+4917676890523"><i className="fas fa-phone-alt" aria-hidden="true"></i> <span>+49 (1)76 768 905 23</span></a></li>
                        <li><a href="https://www.instagram.com/samosafactoryde/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square" aria-hidden="true"></i> <span>Instagram</span></a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a title="Samosa Factory" href="/">
                                <img width="160" src={'assets/images/logo.png'} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="header__navigation-wrapper d-flex justify-content-end align-items-center w-100 h-100">
                            <nav className="header__navigation">
                                <ul className="header__menu d-flex align-items-center m-0 p-0">
                                    <li><button className="header__menu-item btn">Home</button></li>
                                    <li><button className="header__menu-item btn">Menu</button></li>
                                    <li><button className="header__menu-item btn">Why us?</button></li>
                                    <li><button className="header__menu-item btn">Contact</button></li>
                                    <li><WhiteButton text="Get an Offer" /></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
