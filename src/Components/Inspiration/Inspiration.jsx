import React from 'react';
import './inspiration-styles.css';

const Inspiration = (props) => {

    return (
        <div id={props.id} className='inspire'>
            <div className="ui container">
                <div className="ui grid">
                    <div className='content-box'>
                        <h2 className="ui header">What Inspires Me</h2>
                            <p className='ui header'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                            <img src='/Assets/Logos/LogoWhite.svg' alt='image' />
                    </div>
                    
                </div>
            </div> 
        </div>
    )

}

export default (Inspiration);