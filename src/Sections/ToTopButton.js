import React, {useState} from "react";
import Arrow from './resources/arrow-up.png';

const styleButton = {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: '50%',
    backgroundColor: '#D36135',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

const styleImage = {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10
};

const TopButton = () => {
    const [visible, setVisible] = useState(false)
  
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
            <a href="#top" style={{display: visible ? 'inline' : 'none'}}><button style={styleButton}><img src={Arrow} style={styleImage} alt='arrow up' /></button></a>
        </div>
    );
}

export default TopButton;