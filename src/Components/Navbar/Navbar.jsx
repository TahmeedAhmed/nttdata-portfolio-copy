import React from 'react';
import './styles.css';


const Nav = () => {
    return (
        <div className="ui fixed stackable menu nav-links" id="nav">
            <div className="ui container">
                <img className="logo"src='/Assets/Logos/LogoTagRightColor.svg' alt='NTT DATA Corporate Logo'/>
                <div className="right menu">
                    <a className="item" href='#introduction'>Introduction</a>
                    <a className="item" href='#about'>About</a>
                    <a className="item" href='#inspiration'>Inspiration</a>
                    <a className="item" href='#skills'>Skills</a>
                    <a className="item" href='#projects'>Projects</a>
                </div>
            </div>
        </div>
    )
}

export default (Nav);