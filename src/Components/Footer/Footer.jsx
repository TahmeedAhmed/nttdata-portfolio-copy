import React from 'react';
import './style.css';



const name = "Tahmeed Ahmed";

const Footer = () => {
    return (
        <div id="footerWrapper">
            <div id="footerContainer" className="ui container">
                <div className="ui container">
                    <h3> {name} </h3>
                    <i class="copyright outline icon"></i> All Rights Reserved | NTT Data UK | 2020            
                </div>

                <div className="ui right aligned container">
                <img className="logo"src='/Assets/Logos/LogoTagRightColor.svg' alt='NTT DATA Corporate Logo'/>
                </div>
            </div>
        </div>
    )
}

export default (Footer);