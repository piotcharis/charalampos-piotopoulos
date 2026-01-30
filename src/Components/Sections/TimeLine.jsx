import React from "react";
import "../../App.css";

export const Timeline = ({ children, isDark }) => {
  return (
    <div
      className="timeline-container"
      style={{ color: isDark ? "#F5F5F5" : "#232c33" }}
    >
      {children}
    </div>
  );
};

export const Event = ({ title, subtitle, interval, children}) => {
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
