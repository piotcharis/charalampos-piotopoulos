import React, {useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Fade from 'react-reveal/Fade';
import '../../App.css'

function Projects() {
    const itemData = [
        {img: require("./resources/website-dark.png"),
        title: 'This website',
        description: 'This website was created using React.js, HTML and CSS.',
        git: 'https://github.com/piotcharis/personal_site', 
        id: 1},
        {img: require("./resources/search-engine.png"), 
        title: 'Pingu Search Engine', 
        description: 'This app was created using Java.',
        git: 'https://github.com/piotcharis/SearchEnginePGdP',
        id: 2},
        {img: require("./resources/mandelbrot.png"),
        title: 'Mandelbrot set', 
        description: 'This program was created using C.',
        git: 'https://github.com/piotcharis/Mandelbrot',
        id: 3},
        {img: require("./resources/top-of-the-hats.png"),
        title: 'Top of the hats', 
        description: 'This program was created using Java and Java Swing.',
        git: 'https://github.com/piotcharis/TopOfTheHats',
        id: 4}
    ];

    const styleCardText = {
        fontSize: window.innerWidth > 1000 ? 15 : 12, 
        height:'auto'
    };

    const [over1, setOver1] = useState(false);
    const [over2, setOver2] = useState(false);
    const [over3, setOver3] = useState(false);
    const [over4, setOver4] = useState(false);

    return (
        <div className="divProjects">
            <h1 className="title">Projects</h1>
            <ImageList sx={{ width: '95vw', height: '100%' }} cols={window.innerWidth < 1000 ? 1 : 2} rowHeight={'10rem'} gap={9} style={{padding:'1rem', textAlign:'center', fontFamily:'Rubik, sans-serif'}}>
                <Fade delay={50} bottom={true}>
                    <ImageListItem key={itemData[0]}>
                        <img
                            src={`${itemData[0].img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${itemData[0].img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={itemData[0].title}
                            loading="lazy"
                            style={{position:'relative', display:'block', overflow:'hidden'}}
                        />
                        <div style={{position:'absolute', flexDirection:'column', justifyContent:'center', display:'flex' , alignItems:'center', width:'100%', height:'100%', backgroundColor:'#D36135', opacity:over1 ? '0.88' : '0', color:'white', fontFamily:'Rubik, sans-serif', fontWeight:'800', fontSize:'1.3rem', transition:'0.5s'}}
                        onMouseEnter={() => setOver1(true)} 
                        onMouseLeave={() => setOver1(false)}>
                            {itemData[0].title}
                            <p style={styleCardText}>{itemData[0].description}</p>
                            <a href={itemData[0].git}>
                                <button style={{border:'transparent', background:'transparent', width:'4rem'}}>
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub"/>
                                </button>
                            </a>
                        </div>
                    </ImageListItem>
                </Fade>
                <Fade delay={105} bottom={true}>
                    <ImageListItem key={itemData[1]}>
                        <img
                            src={`${itemData[1].img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${itemData[1].img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={itemData[1].title}
                            loading="lazy"
                            style={{position:'relative', display:'block', overflow:'hidden'}}
                        />
                        <div style={{position:'absolute', flexDirection:'column', justifyContent:'center', display:'flex' , alignItems:'center', width:'100%', height:'100%', backgroundColor:'#D36135', opacity:over2 ? '0.88' : '0', color:'white', fontFamily:'Rubik, sans-serif', fontWeight:'800', fontSize:'1.3rem', transition:'0.5s'}}
                        onMouseEnter={() => setOver2(true)} 
                        onMouseLeave={() => setOver2(false)}>
                            {itemData[1].title}
                            <p style={styleCardText}>{itemData[1].description}</p>
                            <a href={itemData[1].git}>
                                <button style={{border:'transparent', background:'transparent', width:'4rem'}}>
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub"/>
                                </button>
                            </a>
                        </div>
                    </ImageListItem>
                </Fade>
                <Fade delay={155} bottom={true}>
                    <ImageListItem key={itemData[2]}>
                        <img
                            src={`${itemData[2].img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${itemData[2].img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={itemData[2].title}
                            loading="lazy"
                            style={{position:'relative', display:'block', overflow:'hidden'}}
                        />
                        <div style={{position:'absolute', flexDirection:'column', justifyContent:'center', display:'flex' , alignItems:'center', width:'100%', height:'100%', backgroundColor:'#D36135', opacity:over3 ? '0.88' : '0', color:'white', fontFamily:'Rubik, sans-serif', fontWeight:'800', fontSize:'1.3rem', transition:'0.5s'}}
                        onMouseEnter={() => setOver3(true)} 
                        onMouseLeave={() => setOver3(false)}>
                            {itemData[2].title}
                            <p style={styleCardText}>{itemData[2].description}</p>
                            <a href={itemData[2].git}>
                                <button style={{border:'transparent', background:'transparent', width:'4rem'}}>
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub"/>
                                </button>
                            </a>
                        </div>
                    </ImageListItem>
                </Fade>
                <Fade delay={165} bottom={true}>
                    <ImageListItem key={itemData[3]}>
                        <img
                            src={`${itemData[3].img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${itemData[3].img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={itemData[3].title}
                            loading="lazy"
                            style={{position:'relative', display:'block', overflow:'hidden'}}
                        />
                        <div style={{position:'absolute', flexDirection:'column', justifyContent:'center', display:'flex' , alignItems:'center', width:'100%', height:'100%', backgroundColor:'#D36135', opacity:over4 ? '0.88' : '0', color:'white', fontFamily:'Rubik, sans-serif', fontWeight:'800', fontSize:'1.3rem', transition:'0.5s'}}
                        onMouseEnter={() => setOver4(true)} 
                        onMouseLeave={() => setOver4(false)}>
                            {itemData[3].title}
                            <p style={styleCardText}>{itemData[3].description}</p>
                            <a href={itemData[3].git}>
                                <button style={{border:'transparent', background:'transparent', width:'4rem'}}>
                                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt="GitHub"/>
                                </button>
                            </a>
                        </div>
                    </ImageListItem>
                </Fade>
            </ImageList>
        </div>
    )
}

export default Projects;

