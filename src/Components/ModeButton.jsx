import PropTypes from "prop-types";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ModeButton = ({ isDark, onToggle }) => {
  return (
    <DarkModeSwitch
      checked={isDark}
      onChange={onToggle}
      size={26}
      sunColor="#232c33"
      moonColor="#f5f5f5"
    />
  );
};

ModeButton.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ModeButton;