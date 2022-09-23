import React from "react"
import { Chrono } from "react-chrono";
import "../App.css"

const style = {
    fontFamily: 'Roboto Mono',
    fontSize: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};

function Education (props) {
    const items = [{
        title: "10/2021 - present",
        cardTitle: "Technical University of Munich (TUM)",
        cardSubtitle:"Computer Science (Bachelor of Science)",
        cardDetailedText: "Application Subject: Medicine."
    }, {
        title: "10/2018 - 09/2021",
        cardTitle: "University of Saarland",
        cardSubtitle:"Medicine (Staatsexamen)",
        cardDetailedText: "Successfully completed courses: Chemistry, Clinical Chemistry, Biology, Clinical Biology, Physics, Anatomy, Biochemistry, Histology, Physiology, Clinical Physiology, Medical Terminology, Psychology, Sociology and Clinical Medicine"
    }, {
        title: "09/2012 - 07/2018",
        cardTitle: "German School of Athens (DSA)",
        cardSubtitle:"Allgemeine Hochschulreife (Abitur)",
        cardDetailedText: "Grade: 1.2"
    }];

    return (
        <div style={style}>
            <h1 className="title">Education</h1>
            <div style={{display:'flex', width: "98vw", height: "auto", fontSize: 'auto'}}>
            <Chrono 
            items={items}
            theme={{
                primary: props.isDark ? '#FFFFFF' : '#232C33',
                secondary: '#D36135',
                cardBgColor: props.isDark ? '#B5BBBB' : '#FFFFFF' ,
                cardForeColor: '#232C33',
                titleColor: '#7C898B',
                titleColorActive: '#232C33'
            }} 
            cardHeight="200"
            allowDynamicUpdate="true" 
            useReadMore="true" 
            hideControls="true" 
            fontSizes={{
            cardSubtitle: 'auto',
            cardText: 'auto',
            cardTitle: 'auto',
            title: '0.6rem',}}
            mode= {window.innerWidth < 450 ? "VERTICAL" : "VERTICAL_ALTERNATING" }/>
            </div>
        </div>
    );
}

export default Education;