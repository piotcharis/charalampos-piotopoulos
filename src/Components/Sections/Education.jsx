import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { Timeline, Event } from "./TimeLine";
import "../../App.css";

function Education(props) {
  return (
    <div className="divEdu">
      <h1 className="title">Education</h1>
      <Timeline isDark={props.isDark}>
        <Fade delay={50} direction="up" triggerOnce>
          <div>
            <Event
              interval={"Present"}
              title={"Technical University of Munich (TUM)"}
              subtitle={"Computer Science (Master of Science)"}
            ></Event>
          </div>
        </Fade>
        <Fade delay={100} direction="up" triggerOnce>
          <div>
            <Event
              title={"Technical University of Munich (TUM)"}
              subtitle={"Computer Science (Bachelor of Science)"}
            >
              Application Subject: Medicine
            </Event>
          </div>
        </Fade>
        {/* <Fade delay={150} direction="up" triggerOnce>
          <div>
            <Event
              interval={"2018 - 2021"}
              title={"University of Saarland"}
              subtitle={"Medicine (Staatsexamen)"}
            >
              Successfully completed courses: Chemistry, Clinical Chemistry,
              Biology, Clinical Biology, Physics, Anatomy, Biochemistry,
              Histology, Physiology, Clinical Physiology, Medical Terminology,
              Psychology, Sociology and Clinical Medicine.
            </Event>
          </div>
        </Fade> */}
        <Fade delay={200} direction="up" triggerOnce>
          <div>
            <Event
              title={"German School of Athens (DSA)"}
              subtitle={"Allgemeine Hochschulreife (Abitur)"}
            ></Event>
          </div>
        </Fade>
      </Timeline>
    </div>
  );
}

Education.propTypes = {
  isDark: PropTypes.bool,
};

export default Education;
