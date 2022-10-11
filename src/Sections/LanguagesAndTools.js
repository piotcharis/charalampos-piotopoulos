import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../App.css"

const styleIcon = {
    width: 60,
    height: 65,
    padding: 10
};

const LanguagesAndTools = () => {
    return (
        <div className="mainStyle">
            <h1 className="title">Languages and Tools</h1>
            <p>
                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="java">Java</Tooltip>}>
                    <a href="https://www.java.com/en/"><img src="https://user-images.githubusercontent.com/79626497/189351129-c95e19fc-68c8-480c-8b9b-76091299ed45.png" alt="Java" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="c">C</Tooltip>}>
                <a href="https://www.cprogramming.com/"><img src="https://user-images.githubusercontent.com/79626497/189351660-35d2acec-dade-4ea4-802b-750843c30f11.png" alt="C" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="assembly">Assembly</Tooltip>}>
                <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html/"><img src="https://user-images.githubusercontent.com/79626497/189353214-f5308df0-abb6-4ccf-8643-ba8cfbc05b9c.png" alt="Assembly" style={{width: 75, height: 70, padding:10}} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="ocaml">Ocaml</Tooltip>}>
                <a href="https://ocaml.org/"><img src="https://user-images.githubusercontent.com/79626497/189353441-10a738f5-917b-4584-aa73-24521208351d.png" alt="Ocaml" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="react">React</Tooltip>}>
                <a href="https://reactjs.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={styleIcon}/></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="js">JavaScript</Tooltip>}>
                <a href="https://www.javascript.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={styleIcon}/></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="html">HTML</Tooltip>}>
                <a href="https://html.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="latex">LaTeX</Tooltip>}>
                <a href="https://www.latex-project.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" alt="LaTeX" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="markdown">Markdown</Tooltip>}>
                <a href="https://www.markdownguide.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" alt="Markdown" style={styleIcon}/></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="docker">Docker</Tooltip>}>
                <a href="https://www.docker.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="git">Git</Tooltip>}>
                <a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="gradle">Gradle</Tooltip>}>
                <a href="https://gradle.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg" alt="Gradle" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="spring">Spring</Tooltip>}>
                <a href="https://spring.io/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="android">Android</Tooltip>}>
                <a href="https://www.android.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg" alt="Android" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="apple">Apple</Tooltip>}>
                <a href="https://www.apple.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" style={styleIcon} /></a>
                </OverlayTrigger>

                <OverlayTrigger placement="right" delay={{show: 250, hide: 400}} overlay={<Tooltip id="linux">Linux</Tooltip>}>
                <a href="https://www.linux.org/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" style={styleIcon} /></a>
                </OverlayTrigger>
            </p>
        </div>
    );
}

export default LanguagesAndTools;