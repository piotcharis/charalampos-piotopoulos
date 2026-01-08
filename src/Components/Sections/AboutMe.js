import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../App.css";

function getAge() {
  let today = new Date();
  let birthDate = new Date("2000-05-15");
  let age = today.getFullYear() - 2000;
  let m = today.getMonth() - 5;

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age + "";
}

const AboutMe = () => {
  return (
    <div className="divAbout">
      <Row xs={1} md={2} className="g-4">
        <Col style={{ textAlign: "center", margin: "auto" }}>
          <img
            src={require("./resources/astronaut-standing.png")}
            alt="astronaut"
            style={{ width: "25%", height: "auto" }}
          />
        </Col>
        <Col>
          <h1 className="title" style={{ paddingTop: "30px" }}>
            About me
          </h1>

          <div style={{ textAlign: "left", alignItems: "right" }}>
            <p>
              My name is Charalampos Piotopoulos, I am {getAge()} years old,
              from Greece and I study MSc. Computer Science at the Technical
              University of Munich (TUM).{" "}
            </p>
            <p>
              I am always trying to evolve and learn new things by working hard
              and seeking new challenges. I am passionate about Programming,
              Technology, Science, Medicine and Space. I am currently exploring
              all the different paths and interdisciplinary opportunities this
              science has to offer by studying, researching and building
              projects of my own.
            </p>
            <p>
              I am looking forward to hearing ideas, suggestions and to help
              make them a reality.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
