import React, { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import "../App.css"
import Fade from 'react-reveal/Fade';

const style = {
    fontFamily: 'Rubik',
    fontSize: 'calc(8px + 1vmin)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left'
};

function Education () {
    return (
        <div style={style}>
            <h1 className="title">Education</h1>
            <Fragment>
                <Timeline>
                        <Fade delay={50} bottom={true}>
                            <Event interval={"2021 - present"} title={"Technical University of Munich (TUM)"} subtitle={"Computer Science (Bachelor of Science)"}>
                                Application Subject: Medicine.
                            </Event>
                        </Fade>
                        <Fade delay={100} bottom={true}>
                        <Event interval={"2018 - 2021"} title={"University of Saarland"} subtitle={"Medicine (Staatsexamen)"}>
                            Successfully completed courses: Chemistry, Clinical Chemistry, Biology, Clinical Biology, Physics, Anatomy, Biochemistry, 
                            Histology, Physiology, Clinical Physiology, Medical Terminology, Psychology, Sociology and Clinical Medicine.
                        </Event>
                        </Fade>
                        <Fade delay={150} bottom={true}>
                        <Event interval={"2012 - 2018"} title={"German School of Athens (DSA)"} subtitle={"Allgemeine Hochschulreife (Abitur)"}>
                            Grade: 1.2
                        </Event>
                        </Fade>
                    </Timeline>
            </Fragment>
        </div>
    );
}

export default Education;