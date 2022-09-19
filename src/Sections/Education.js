import React from "react"
import { Chrono } from "react-chrono";

function Education (props) {
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

    const items = [{
        title: "September 2012 - September 2018",
        cardTitle: "German School of Athens (DSA)",
        cardSubtitle:"Allgemeine Hochschulreife (Abitur)",
        cardDetailedText: "Grade: 1.2"
    }, {
        title: "October 2018 - September 2021",
        cardTitle: "University of Saarland",
        cardSubtitle:"Medicine (Staatsexamen)",
        cardDetailedText: "Successfully completed courses: Chemistry, Clinical Chemistry, Biology, Clinical Biology, Physics, Anatomy, Biochemistry, Histology, Physiology, Clinical Physiology, Medical Terminology, Psychology, Sociology and Clinical Medicine"
    }, {
        title: "October 2021 - present",
        cardTitle: "Technical University of Munich (TUM)",
        cardSubtitle:"Computer Science (Bachelor of Science)",
        cardDetailedText: "Application Subject (Anwendungsfach): Medicine"
    }];

    return (
        <div style={style}>
            <h1 style={{paddingBottom: 30, color: '#D36135'}}>Education</h1>
            <div style={{display:'flex', width: "100%", height: "550px"}}>
            <Chrono 
            items={items}
            theme={{
                primary: props.isDark ? '#FFFFFF' : '#232C33',
                secondary: '#D36135',
                cardBgColor: 'white',
                cardForeColor: '#232C33',
                titleColor: '#7C898B',
                titleColorActive: '#232C33'
            }} 
            cardHeight="150" 
            allowDynamicUpdate="true" 
            useReadMore="true" 
            hideControls="true"/>
            </div>
        </div>
    );
}

export default Education;