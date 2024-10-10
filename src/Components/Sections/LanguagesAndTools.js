import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "../../App.css";
import Postman from "./resources/postman-icon.svg";
import PostmanCert from "./resources/postman-cert.png";

const styleIcon = {
  width: window.innerWidth > 1500 ? 80 : 60,
  height: window.innerWidth > 1500 ? 85 : 65,
  padding: 10,
};

const LanguagesAndTools = () => {
  return (
    <div className="mainStyle">
      <h1 className="title">Languages and Tools</h1>
      <p>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="java">Java</Tooltip>}
        >
          <a href="https://www.java.com/en/">
            <img
              src="https://user-images.githubusercontent.com/79626497/189351129-c95e19fc-68c8-480c-8b9b-76091299ed45.png"
              alt="Java"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="c">C</Tooltip>}
        >
          <a href="https://www.cprogramming.com/">
            <img
              src="https://user-images.githubusercontent.com/79626497/189351660-35d2acec-dade-4ea4-802b-750843c30f11.png"
              alt="C"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="c++">C++</Tooltip>}
        >
          <a href="https://cplusplus.com/">
            <img
              src="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
              alt="C++"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="python">Python</Tooltip>}
        >
          <a href="https://www.python.org/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="pytorch">Pytorch</Tooltip>}
        >
          <a href="https://pytorch.org/">
            <img
              src="https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg"
              alt="Pytorch"
              style={{
                width: 140,
                height: window.innerWidth > 1500 ? 85 : 65,
                padding: 10,
              }}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="assembly">Assembly</Tooltip>}
        >
          <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html/">
            <img
              src="https://user-images.githubusercontent.com/79626497/189353214-f5308df0-abb6-4ccf-8643-ba8cfbc05b9c.png"
              alt="Assembly"
              style={{
                width: window.innerWidth > 1500 ? 95 : 75,
                height: window.innerWidth > 1500 ? 90 : 70,
                padding: 10,
              }}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="ocaml">Ocaml</Tooltip>}
        >
          <a href="https://ocaml.org/">
            <img
              src="https://user-images.githubusercontent.com/79626497/189353441-10a738f5-917b-4584-aa73-24521208351d.png"
              alt="Ocaml"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="react">React</Tooltip>}
        >
          <a href="https://reactjs.org/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="js">JavaScript</Tooltip>}
        >
          <a href="https://www.javascript.com/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="node">Node.js</Tooltip>}
        >
          <a href="https://nodejs.org/en">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="Node.js"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="html">HTML</Tooltip>}
        >
          <a href="https://html.com/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="html">MySQL</Tooltip>}
        >
          <a href="https://www.mysql.com/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="latex">LaTeX</Tooltip>}
        >
          <a href="https://www.latex-project.org/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
              alt="LaTeX"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="markdown">Markdown</Tooltip>}
        >
          <a href="https://www.markdownguide.org/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
              alt="Markdown"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="docker">Docker</Tooltip>}
        >
          <a href="https://www.docker.com/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="git">Git</Tooltip>}
        >
          <a href="https://git-scm.com/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="gradle">Gradle</Tooltip>}
        >
          <a href="https://gradle.org/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg"
              alt="Gradle"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="spring">Spring</Tooltip>}
        >
          <a href="https://spring.io/">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
              alt="Spring"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="postman">Postman</Tooltip>}
        >
          <a href="https://www.postman.com/">
            <img src={Postman} alt="Postman" style={styleIcon} />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="postman-cert">
              Postman Student Expert Certification
            </Tooltip>
          }
        >
          <a href="https://api.badgr.io/public/assertions/qXe_zpw9TxWoI-mZI9qXsw">
            <img
              src={PostmanCert}
              alt="Postman Certification"
              style={styleIcon}
            />
          </a>
        </OverlayTrigger>
      </p>
    </div>
  );
};

export default LanguagesAndTools;
