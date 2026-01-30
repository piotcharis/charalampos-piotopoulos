import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

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
  background: #ffffff;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
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
  position: absolute;
  top: 5%;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    position: absolute;
    left: 0;
    top: 50%;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition:
      transform 0.35s ease,
      opacity 0.25s ease;
    transform-origin: center;
  }

  div:nth-child(1) {
    transform: ${({ open }) =>
      open
        ? "translateY(-50%) rotate(45deg)"
        : "translateY(calc(-50% - 0.5rem))"};
  }

  div:nth-child(2) {
    opacity: ${({ open }) => (open ? 0 : 1)};
    transform: translateY(-50%);
  }

  div:nth-child(3) {
    transform: ${({ open }) =>
      open
        ? "translateY(-50%) rotate(-45deg)"
        : "translateY(calc(-50% + 0.5rem))"};
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
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

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
