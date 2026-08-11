import React from "react";
import PropTypes from "prop-types";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ModeButton = ({ isDark, onToggle }) => {
  return (
    <DarkModeSwitch
      style={{ marginBottom: "auto" }}
      checked={isDark}
      onChange={onToggle}
      size={43}
    />
  );
};

ModeButton.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ModeButton;