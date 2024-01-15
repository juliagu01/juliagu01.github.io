/**
 * To-do:
 * - change rays to half-squares
 * - change elements to components
 * ? add carousel to bottom
 */


import { useState, useRef, useEffect } from "react";
import './App.css';
import Content from './components/Content.js';
import OverlayPanel from './components/OverlayPanel.js';
import MenuAction from './components/MenuAction.js';
import Sun from './graphics/Sun.js';
import Map from './graphics/Map.js';
import Snowflake from './graphics/Snowflake.js';
import Orb from './graphics/Orb.js';
import Grid from './graphics/Grid.js';
import Telescope from './graphics/Telescope.js';

function App() {
  const inputRef = useRef(null);
  const [page, setPage] = useState(0);
  const [panel, setPanel] = useState(false);
  const [light, setLight] = useState(true);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleKeyDown(e) {
    switch (e.key) {
      case "Enter":
        if (e.shiftKey)
          decrementPage();
        else
          incrementPage();
        break;
      case "ArrowLeft":
        decrementPage();
        break;
      case "ArrowRight":
        incrementPage();
        break;
      case "m":
        setPanel(!panel);
        break;
      case "x":
        setPanel(false);
        break;
      case "h":
      case "a":
        setPageName("Home");
        break;
      case "p":
        setPageName("Projects");
        break;
      case "c":
      case "e":
        setPageName("Contact");
        break;
      case "t":
        toggleTheme();
        break;
      default:
        break;
    }
  }
  function decrementPage() {
    if (page > 0)
      setPage(page - 1);
  }
  function incrementPage() {
    if (page < text.length - 1)
      setPage(page + 1);
  }
  function toggleTheme() {
    setLight(!light);
    setPanel(false);
  }
  function setPageName(name) {
    switch (name) {
      case "Home":
        setPage(0);
        setPanel(false);
        break;
      case "Projects":
        setPage(1);
        setPanel(false);
        break;
      case "Contact":
        setPage(text.length - 1);
        setPanel(false);
        break;
      default:
        break;
    }
  }
  return (
    <div className={light ? "App Light" : "App Dark"}
      tabIndex="0" onKeyDown={(e) => handleKeyDown(e)} ref={inputRef}>
      <header>
        <h2 id="Logo" onClick={() => setPage(0)}>Julia Gu</h2>
        <MenuAction panel={panel} light={light} onClick={() => setPanel(!panel)} />
      </header>
      <Content text={text[page]} />
      <OverlayPanel show={panel} onOverlayClick={() => setPanel(false)}
        onPageClick={(name) => setPageName(name)} onThemeClick={() => toggleTheme()} />
      <footer>
        <div id="LeftAction" className="Action" onClick={() => decrementPage()}
          style={{ visibility: ((page === 0) ? "hidden" : "visible") }}>
          <h2>&#x2B05;</h2>
          <p>[shift-enter]</p>
        </div>
        <div id="RightAction" className="Action" onClick={() => incrementPage()}
          style={{ visibility: ((page === text.length - 1) ? "hidden" : "visible") }}>
          <h2>&#x27A1;</h2>
          <p>[enter]</p>
        </div>
      </footer>
    </div>
  );
}

const text = [
  {
    heading: "Hello there!",
    description: [
      "I am Julia Gu, current computer science undergraduate at the University of California, Los Angeles. Whether you are a friend checking out what I have been up to or an employer who would like to get to know me, I am pleased to make your acquaintance.",
      "(Interact with the sun beams!)"
    ],
    img: <Sun />
  },
  {
    heading: "Projects",
    description: [
      "These are my personal projects, the earliest dating back to 2019. I have since dabbled in a bit of everything: web development, game development, rendering, and practical applications. Feel free to check them out!"
    ],
    img: <Map />
  },
  {
    heading: "Personal website",
    description: [
      "(Is this meta or what? *wink*)",
      "Back to basics with React.js and CSS. Used React hooks and CSS pseudo-classes to create an interactive single-page website to display my work.",
      "React.js, CSS",
      "2023"
    ],
    img: <Snowflake />
  },
  {
    heading: "Tumble",
    description: [
      "Meet Tumble, a little yellow ball determined to bring color to his gray world. Planned and realized the concept design, narrative, physics, map design, UI/UX, art, and sound.",
      "Java, Processing",
      "2020"
    ],
    img: <><Orb /><img src={process.env.PUBLIC_URL + "/splash.png"} alt="Splash" width="350px" style={{zIndex:1}}/></>,
    link: "https://github.com/juliagu01/Tumble"
  },
  {
    heading: "3D",
    description: [
      "A three dimensional visualizer made with prototype-based programming. Implemented backface culling and Gouraud shading, and analyzed object-to-world and world-to-camera matrix transformations.",
      "JavaScript, Processing.js",
      "2021"
    ],
    img: <img src={process.env.PUBLIC_URL + "/model.png"} alt="Model" width="300px" style={{"borderRadius": "100%"}} />,
    link: "https://www.khanacademy.org/computer-programming/spin-off-of-3d/5521346115485696"
  },
  {
    heading: "Finite Series Calculator",
    description: [
      "A tool to generate the general nth partial sum of any polynomial series. Experimented with dynamic programming and automated a mathematical approach.",
      "JavaScript",
      "2020"
    ],
      img: <img src={process.env.PUBLIC_URL + "/results.png"} alt="Results" width="300px" />,
      link: "https://www.khanacademy.org/computer-programming/finite-series-calculator/5330136479924224"
  },
  {
    heading: "BruinEats",
    description: [
      "A web app designed to help Bruins help Bruins navigate UCLA's food trucks. Designed a mockup, maintained the database schema, and implemented select frond-end features in a team setting.",
      "MERN, touch of Tailwind CSS",
      "2023"
    ],
    img: <img src={process.env.PUBLIC_URL + "/welcome.png"} alt="Welcome" width="300px" />,
    link: "https://github.com/jameswang08/ucla-dining-app"
  },
  {
    heading: "Driving Practice",
    description: [
      "Want to practice parking without fearing for your fender? A program with a simple curvature indicator and frame-by-frame playback feature to help student drivers (like me at the time!) learn to park.",
      "JavaScript, Processing.js",
      "2022"
    ],
    img: <img src={process.env.PUBLIC_URL + "/playback.png"} alt="Playback" width="300px" />,
    link: "https://www.khanacademy.org/computer-programming/driving-practice/5228465746395136"
  },
  {
    heading: "Oculochroma",
    description: [
      "Color-blindness test, gamified. Worked with the Java Swing library and designed an object-oriented program to help qualify color-blindness, equipped with a timer and score system.",
      "Java",
      "2019"
    ],
    img: <><Grid /><img src={process.env.PUBLIC_URL + "/grid.png"} alt="Grid" width="350px" style={{zIndex: 1}} /></>,
    link: "https://github.com/juliagu01/OculoChroma"
  },
  {
    heading: "Contact",
    description: [
      "Interested in learning more? You can reach me at julia.gu01@gmail.com or (408) 676-7257. I look forward to speaking with you!"
    ],
    img: <Telescope />
  }
];

export default App;
