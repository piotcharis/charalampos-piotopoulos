import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Postman from "./resources/postman-icon.svg";
import PostmanCert from "./resources/postman-cert.png";
import PMCert from "./resources/pm-cert.png";
import "../../App.css";

const skills = [
  {
    id: "java",
    label: "Java",
    href: "https://www.java.com/en/",
    src: "https://user-images.githubusercontent.com/79626497/189351129-c95e19fc-68c8-480c-8b9b-76091299ed45.png",
  },
  {
    id: "c",
    label: "C",
    href: "https://www.cprogramming.com/",
    src: "https://user-images.githubusercontent.com/79626497/189351660-35d2acec-dade-4ea4-802b-750843c30f11.png",
  },
  {
    id: "cpp",
    label: "C++",
    href: "https://cplusplus.com/",
    src: "https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg",
  },
  {
    id: "python",
    label: "Python",
    href: "https://www.python.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "php",
    label: "PHP",
    href: "https://www.php.net/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    id: "pytorch",
    label: "Pytorch",
    href: "https://pytorch.org/",
    src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-ar21.svg",
    size: { width: 140, widthSmall: 100 },
  },
  {
    id: "assembly",
    label: "Assembly",
    href: "https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html/",
    src: "https://user-images.githubusercontent.com/79626497/189353214-f5308df0-abb6-4ccf-8643-ba8cfbc05b9c.png",
    size: { width: 90, widthSmall: 70 },
  },
  {
    id: "ocaml",
    label: "Ocaml",
    href: "https://ocaml.org/",
    src: "https://user-images.githubusercontent.com/79626497/189353441-10a738f5-917b-4584-aa73-24521208351d.png",
  },
  {
    id: "react",
    label: "React",
    href: "https://reactjs.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "js",
    label: "JavaScript",
    href: "https://www.javascript.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "node",
    label: "Node.js",
    href: "https://nodejs.org/en",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
  },
  {
    id: "html",
    label: "HTML",
    href: "https://html.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: "mysql",
    label: "MySQL",
    href: "https://www.mysql.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: "latex",
    label: "LaTeX",
    href: "https://www.latex-project.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
  },
  {
    id: "markdown",
    label: "Markdown",
    href: "https://www.markdownguide.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
  },
  {
    id: "docker",
    label: "Docker",
    href: "https://www.docker.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: "git",
    label: "Git",
    href: "https://git-scm.com/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: "gradle",
    label: "Gradle",
    href: "https://gradle.org/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
  },
  {
    id: "spring",
    label: "Spring",
    href: "https://spring.io/",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    id: "postman",
    label: "Postman",
    href: "https://www.postman.com/",
    src: Postman,
  },
  {
    id: "postman-cert",
    label: "Postman Student Expert Certification",
    href: "https://api.badgr.io/public/assertions/qXe_zpw9TxWoI-mZI9qXsw",
    src: PostmanCert,
    alt: "Postman Certification",
  },
  {
    id: "pm-cert",
    label: "Google Project Manager Professional Certificate",
    href: "https://www.coursera.org/account/accomplishments/specialization/VVQ12UZCE1KX",
    src: PMCert,
    alt: "Google PM Certification",
  },
];

const LanguagesAndTools = () => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 1500);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > 1500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mainStyle">
      <h1 className="title">Languages and Tools</h1>
      <div className="skills-grid">
        <Fade cascade damping={0.02} direction="up" triggerOnce>
          {skills.map((skill) => {
            const width = isLarge
              ? (skill.size?.width ?? 80)
              : (skill.size?.widthSmall ?? 60);
            const style = {
              width,
              height: isLarge ? 85 : 65,
              padding: 10,
              cursor: "pointer",
            };

            return (
              <OverlayTrigger
                key={skill.id}
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id={skill.id}>{skill.label}</Tooltip>}
              >
                <a href={skill.href} target="_blank" rel="noreferrer">
                  <img
                    src={skill.src}
                    alt={skill.alt ?? skill.label}
                    style={style}
                    loading="lazy"
                  />
                </a>
              </OverlayTrigger>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default LanguagesAndTools;
