import React from "react";
import Hand from "./resources/waving-hand.png";

const styleText = {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    paddingTop: 30
};

const styleImage = {
    width: 45,
    height: 45
};

const Home = () => {
    return (
        <div style={styleText}>
            <h1 style={{paddingBottom: 30}}>Welcome! <img src={Hand} alt="waving hand" style={styleImage}/></h1>
            
            <p>
                This is my personal website. Here you can find information about me and my projects.
            </p>
        </div>
    );
}

export default Home;