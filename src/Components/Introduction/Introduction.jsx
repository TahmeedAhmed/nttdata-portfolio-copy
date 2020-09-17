import React from 'react';
import 'fontsource-roboto';

const greeting = "Hi there!";
const fullname = "John Smith";
const jobTitle = "Software Engineer";
const company = "NTT Data UK";

const introSentTempStyle = {
    color: "#808080",
    fontSize: "50px"
};

const introductionSentenceTemplate = (
    <h1 style={introSentTempStyle}>
        <i>
            I'm {fullname}, <br/>
            a {jobTitle} at<br/> 
            {company} <br/>
            This is my Digital Portfolio!
        </i>
    </h1>
);

const mainWrapperStyle = {
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    marginTop: "5rem"
};

const profilePictureStyle = {
    borderRadius : "30%",
    paddingRight: "3rem",
    maxWidth: "30rem",
    maxHeight: "25rem"
}

const Introduction = (props) => {
    return (
        <div id={props.id}>

            <div id="mainWrapper" className="ui container" style={mainWrapperStyle}>

                <div className="ui left aligned container">
                    <div id="introSection" className="ui message" style={{borderRadius: "5%"}}>
                        <h1 style={{fontSize: '50px'}}> 
                            { greeting } 
                        </h1>
                        <h1 style={introSentTempStyle}>
                            <i>
                                I'm Tahmeed Ahmed{props.user.name}, <br/>
                                a {jobTitle} at<br/> 
                                {company} <br/>
                                This is my Digital Portfolio!
                            </i>
                        </h1>
                        
                    </div>
                </div>

                <div className="ui right aligned container">
                    <div id="profilePictureSection">
                        <img src="/Assets/tahmeed.jpeg" alt="profile-pic" style={profilePictureStyle} />
                    </div>
                </div>                


                
            </div>
        </div>
    )
}

export default Introduction;
