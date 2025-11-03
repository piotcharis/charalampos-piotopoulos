import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Timeline, Event } from "react-timeline-scribble";
import "../../App.css";

function Experience() {
  return (
    <div className="divEdu">
      <h1 className="title">Experience</h1>
      <Timeline>
        <Fade delay={50} bottom={true}>
          <Event
            interval={"Nov 2025 - present"}
            title={"Koinon / TU Munich"}
            subtitle={"Software Engineer - Part-time"}
          >
            Contributing to TUM's central platform for teaching management. My
            role focuses on developing, maintaining, and optimizing features
            within an existing PHP / jQuery framework that supports teaching and
            administrative processes across the university.
          </Event>
        </Fade>
      </Timeline>
    </div>
  );
}

export default Experience;
