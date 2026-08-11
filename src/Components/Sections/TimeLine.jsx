import PropTypes from "prop-types";
import "../../App.css";

export const Timeline = ({ children, isDark }) => {
  return (
    <div
      className={`timeline-container ${isDark ? "theme-text--dark" : "theme-text--light"}`}
      style={{ width: "stretch" }}
    >
      {children}
    </div>
  );
};

Timeline.propTypes = {
  children: PropTypes.node,
  isDark: PropTypes.bool,
};

export const Event = ({ title, subtitle, interval, children }) => {
  return (
    <div className="timeline-event">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <span className="timeline-interval">{interval}</span>
        <h3 className="timeline-title">{title}</h3>
        <h4 className="timeline-subtitle">{subtitle}</h4>
        <div className="timeline-body">{children}</div>
      </div>
    </div>
  );
};

Event.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  interval: PropTypes.string,
  children: PropTypes.node,
};
