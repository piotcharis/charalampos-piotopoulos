import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ModeButton = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
      setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: 'auto' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={43}
      />
    </>
  );
};

export default ModeButton;