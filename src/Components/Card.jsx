import PropTypes from "prop-types";
import "../App.css";

function Card({ title, description, image, link, linkLabel, isDark, icon }) {
  return (
    <div
      className={`project-card${isDark ? " project-card--dark" : ""}`}
    >
      <img
        src={image}
        alt={title}
        className="project-card__image"
        loading="lazy"
      />
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__links">
        <a
          href={link}
          aria-label={linkLabel}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            border: "transparent",
            background: "transparent",
            width: "4rem",
            cursor: "pointer",
          }}
        >
          {icon}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.any,
  link: PropTypes.string,
  linkLabel: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

export default Card;
