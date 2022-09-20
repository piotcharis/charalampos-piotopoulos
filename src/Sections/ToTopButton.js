import React, {useState} from "react";
import Arrow from './resources/arrow-up.png';
import '../App.css';

const styleImage = {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10
};

const TopButton = () => {
    const [visible, setVisible] = useState(false);
    const [buttonColor, setButtonColor] = useState('#D36135');

    const styleButton = {
        position: 'fixed',
        zIndex: 10,
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: buttonColor,
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
    };
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <a href="#top" style={{display: visible ? 'inline' : 'none'}}>
                <button 
                    style={styleButton} 
                    onMouseEnter={() => setButtonColor("#526062")} 
                    onMouseLeave={() => setButtonColor("#D36135")}>
                        <img src={Arrow} style={styleImage} alt='arrow up' />
                </button></a>
        </div>
    );
}

export default TopButton;