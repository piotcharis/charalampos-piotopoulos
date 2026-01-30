import { Fade } from "react-awesome-reveal";
import { Timeline, Event } from "./TimeLine";
import "../../App.css";

function Experience(props) {
  return (
    <div className="divExp">
      <h1 className="title">Experience</h1>
      <Timeline isDark={props.isDark}>
        <Fade delay={50} direction="up" triggerOnce>
          <div>
            <Event
              interval={"Nov 2025 - present"}
              title={"Koinon / TU Munich"}
              subtitle={"Software Engineer - Part-time"}
            >
              <div
                style={{
                  maxWidth: "205ch",
                }}
              >
                Contributing to TUM's central platform for teaching management.
                My role focuses on developing, maintaining, and optimizing
                features within an existing PHP / jQuery framework that supports
                teaching and administrative processes across the university.
              </div>
            </Event>
          </div>
        </Fade>
      </Timeline>
    </div>
  );
}

export default Experience;
