import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // If the reference hasn't been defined or the click is INSIDE the ref, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Otherwise, call the handler (which will be setOpen(false))
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(35, 44, 51, 0.3)" : "rgba(255, 255, 255, 0.3)"};
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"};
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(calc(-100% - 3rem))"};
  height: calc(100vh - 2.5rem);
  width: calc(100% - 3rem);
  max-width: 320px;
  overflow-y: auto;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 1.25rem;
  left: 1.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 15;

  @media (max-width: 576px) {
    width: calc(100% - 2.5rem);
    left: 1.25rem;
  }

  a {
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ $isDark }) => ($isDark ? "#f5f5f5" : "#0d0c1d")};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

const StyledBurger = styled.button`
  position: fixed;
  top: 1.25rem;
  left: 1.5rem;
  z-index: 20;
  width: 44px;
  height: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid
    ${({ $isDark }) =>
      $isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"};
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  background: ${({ $isDark }) =>
    $isDark ? "rgba(44, 62, 80, 0.65)" : "rgba(255, 255, 255, 0.65)"};
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.16),
    0 2px 6px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 14px 28px rgba(0, 0, 0, 0.2),
      0 3px 8px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  div {
    width: 20px;
    height: 2px;
    border-radius: 10px;
    background: ${({ $isDark }) => ($isDark ? "#f5f5f5" : "#232c33")};
    transition:
      transform 0.3s ease,
      opacity 0.2s ease,
      background 0.2s ease;
  }

  div:nth-child(1) {
    transform: ${({ open }) =>
      open ? "translateY(7px) rotate(45deg)" : "none"};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  div:nth-child(3) {
    transform: ${({ open }) =>
      open ? "translateY(-7px) rotate(-45deg)" : "none"};
  }
`;

const Menu = ({ open, isDark }) => {
  return (
    <StyledMenu open={open} $isDark={isDark}>
      <a href="#aboutMe">/About me</a>
      <a href="#exp">/Experience</a>
      <a href="#edu">/Education</a>
      <a href="#certificates">/Certificates</a>
      <a href="#projects">/Projects</a>
      <a href="#languages">/Languages and Tools</a>
      <a href="#contact">/Contact</a>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen, isDark }) => {
  return (
    <StyledBurger
      open={open}
      $isDark={isDark}
      onClick={() => setOpen(!open)}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

Menu.propTypes = {
  open: PropTypes.bool,
  isDark: PropTypes.bool,
};

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
  isDark: PropTypes.bool,
};

const Navbar = ({ isDark }) => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} isDark={isDark} />
        <Menu open={open} isDark={isDark} />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isDark: PropTypes.bool,
};

export default Navbar;
