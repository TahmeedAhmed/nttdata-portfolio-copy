import React from 'react';
import './contact-styles.css';

const Contact = (props) => {

    return (
        <div id={props.id} className='contact'>
            <div className="ui container">
                <h1 className="form-title">Hire or Contact</h1>
                <form class="ui form">
                    <div class="field">
                        <input type="text" name="first-name" placeholder="First Name" required/>
                    </div>
                    <div class="field">
                        <input type="text" name="last-name" placeholder="Last Name" required/>
                    </div>
                    <div class="field">
                        <textarea placeholder='Message' required></textarea>
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default (Contact);