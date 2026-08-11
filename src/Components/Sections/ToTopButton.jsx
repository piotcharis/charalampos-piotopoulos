import { useEffect, useState } from "react";
import Arrow from "./resources/arrow-up.png";
import Arrow_Orange from "./resources/arrow-up-orange.png";
import "../../App.css";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [over, setOver] = useState(false);

  const styleButton = {
    position: "fixed",
    zIndex: 10,
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: over ? "#1e3c73" : "#D36135",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  };

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div>
      <a href="#top" style={{ display: visible ? "inline" : "none" }}>
        <button
          style={styleButton}
          onMouseEnter={() => setOver(true)}
          onMouseLeave={() => setOver(false)}
        >
          <img
            src={over ? Arrow_Orange : Arrow}
            className="topButtonImg"
            alt="arrow up"
          />
        </button>
      </a>
    </div>
  );
};

export default TopButton;
