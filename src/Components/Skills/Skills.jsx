import React from 'react';
import $ from "jquery";

const frontendTemplate = (
    <div>
        <h3> Frontend Skills </h3>
    </div>
);


const mainWrapperStyle = {
    padding: "3rem"
};




const usersSkills = [
    {
        name: "Frontend Skills",
        skills: [
            {
                name: "React JS",
                pictureFileName: "react-js.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "Angular JS",
                pictureFileName: "angular-js.png",
                rating: [{star: "true"}, {star: "true"}]
            },{
                name: "SASS",
                pictureFileName: "sass.png",
                rating: [{star: "true"}]
            },{
                name: "Redux",
                pictureFileName: "redux.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "TypeScript",
                pictureFileName: "typescript.png",
                rating: [{star: "true"}, {star: "true"}]
            },{
                name: "Apollo",
                pictureFileName: "apollo.png",
                rating: [{star: "true"}, {star: "true"}]
            }

        ]
    },
    {
        name: "Backend Skills",
        skills: [
            {
                name: "Java",
                pictureFileName: "java.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "Node JS",
                pictureFileName: "node-js.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "PHP",
                pictureFileName: "php.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "Python",
                pictureFileName: "python.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}]
            }

        ]
    },
    {
        name: "Utilities and Others",
        skills: [
            {
                name: "GraphQL",
                pictureFileName: "graphql.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "Gatsby",
                pictureFileName: "gatsby.png",
                rating: [{star: "true"}, {star: "true"}]
            },{
                name: "Jenkins",
                pictureFileName: "jenkins.png",
                rating: [{star: "true"}, {star: "true"}]
            },{
                name: "GIT",
                pictureFileName: "git.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}]
            },{
                name: "Adobe Experience Manager",
                pictureFileName: "adobe-experience-manager.png",
                rating: [{star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}, {star: "true"}]
            }
        ]
    }

];

const skillPicureStyle = {
    
    height: "50px"
}

const skillsSectionIntroduction = "Here are my most prominent skills. The star ratings indicate how strong I feel I am in the particular skills"

const Skills = (props) => {
    return (
        <div id={props.id} className="ui container" style={mainWrapperStyle}>
            <h1> My Skills </h1> 
            <h4> {skillsSectionIntroduction} </h4> <br/>
            

            <div className="ui styled fluid accordion">
                {
                    usersSkills.map((item) =>
                        <div>
                            <div className="title"
                                style={{backgroundColor: "#ecf4f3"}}
                                onClick={()=>{
                                    var itemNameTrimmed = item.name.replace(/ +/g, "");                                
                                    var contentToFind = "#content" + itemNameTrimmed;
                                    var content = $(contentToFind);

                                    var contentIconToFind = "#contentIcon" + itemNameTrimmed;
                                    var contentIcon = $(contentIconToFind);
                                    
                                    if(content.hasClass("active")) { 
                                        content.removeClass("active");                                
                                        contentIcon.removeClass("up");
                                        contentIcon.addClass("down");                                    
                                    }
                                    else {
                                        content.addClass("active");
                                        contentIcon.removeClass("down");
                                        contentIcon.addClass("up");
                                    }                                    
                                    }
                                }
                                >
                                <br/> 
                                <b style={{fontSize: "12pt"}} className="ui teal ribbon label">
                                    <i 
                                        className="hand point down icon" 
                                        id= {"contentIcon" + item.name.replace(/ +/g, "")}>
                                    </i>
                                    {item.name} 
                                </b>
                                <br/> <br/>
                            </div>

                            <div className="content" id={"content" + item.name.replace(/ +/g, "")}>
                                <div className="ui column grid" style={{backgroundColor: "#ecf4f3"}}>
                                    {
                                        item.skills.map((skill) =>
                                            <div>
                                                <div className="column">
                                                    <div className="ui fluid card"  >
                                                        <div className="centered tiny ui image">
                                                            <img style={skillPicureStyle} id={"img"+skill.pictureFileName} src={"/Assets/"+skill.pictureFileName}
                                                            height="50" width="10" 
                                                                onError={()=>{
                                                                    const invalidImage = document.getElementById("img"+skill.pictureFileName);                                                                    
                                                                    invalidImage.remove();
                                                                }}/>
                                                        </div>
                                                        <div className="centered content">
                                                            {skill.name} <br/>
                                                            {
                                                                skill.rating.map((ratingItem) =>
                                                                    <i className="star small yellow icon"></i>
                                                                )   
                                                            }
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/> 
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    )
                }                
            

            </div>  

            

        </div>
        
    )

}

export default (Skills);



/*document.addEventListener('DOMContentLoaded', (event) => {

    var accordionDiv = document.getElementById("accordion");
    //accordionDiv.accordion();
    alert(accordionDiv);
  })*/