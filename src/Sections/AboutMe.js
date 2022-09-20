import React from "react";
import "../App.css"

const style = {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    paddingTop: 30
};

const styleP = {
    textAlign: 'center',
    alignItems: "right"
};

function getAge() {
    let today = new Date();
    let birthDate = new Date("2000-05-15");
    let age = today.getFullYear() - 2000;
    let m = today.getMonth() - 5;
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    
    }
    return age + "";
}

const AboutMe = () => {
    return (
        <div style={style}>
            <h1 className="title">About me</h1>

            <p style={styleP}>
                <p>My name is Charalampos Piotopoulos, I am {getAge()} years old from Greece and I study Computer Science at the Technical University of Munich (TUM). </p>
                <p>I am always trying to evolve and learn new things by working hard and seeking new challenges. 
                I am passionate about Programming, Technology, Science, Medicine and Space. 
                I am currently exploring all the different paths and interdisciplinary opportunities this science has to offer by studying, reasearching and building projects of my own.</p>
                <p>I am looking forward to hearing ideas, suggestions and to help make them a reality.</p>
            </p>
        </div>
    );
}

export default AboutMe;