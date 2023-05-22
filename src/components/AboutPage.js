import React, { useEffect, useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";
import TransitionEffect from "./TransitionEffect";
import {
  About,
  Education,
  Experience
} from "../subComponents/AboutComponents";
import { INFO, SKILL, WORK, HAT } from "./AllSvgs";
import { NavLink } from "react-router-dom";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  // overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 599px) {
    top: 5%;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  max-height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;

  @media (max-width: 599px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.3rem;
    max-height: 80vh;
    width: 80vw;
  }
`;

const Resume = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  h2 {
    font-size: 1.5rem;
  }
  @media (max-width: 40em) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const BottomLink = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
  h2 {
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }
  z-index: 1;

  @media (max-width: 40em) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const AboutPage = () => {
  const [section, setSection] = useState("about");
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenSize("mobile");
      } else if (width >= 600 && width < 960) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <TransitionEffect />
      <Box>
        <LogoComponent theme="dark" />
        {screenSize === "mobile" ? "" : <SocialIcons theme="dark" />}
        <ParticleComponent theme="dark" />

        <motion.div
          initial={{
            y: -520,
            transition: { type: "spring", duration: 1.8, delay: 1.5 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.8, delay: 1.5 },
          }}
          exit={{
            y: -520,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <Spaceman>
            <NavLink to="/projects">
              <img src={astronaut} alt="spaceman" />
            </NavLink>
          </Spaceman>
        </motion.div>

        <Main>
          <motion.div
            initial={{
              y: -500,
              transition: { type: "spring", duration: 1.8, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.8, delay: 1 },
            }}
            exit={{
              y: -500,
              transition: { type: "spring", duration: 1 },
            }}
          >
            {section === "experience" ? (
              <Experience />
            ) : section === "education" ? (
              <Education />
            ) : (
              <About />
            )}
          </motion.div>
        </Main>

        <motion.div
          initial={{
            x: -800,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          exit={{
            x: -800,
            transition: { type: "spring", duration: 1 },
          }}
        >
          <BigTitle
            text={
              section === "about"
                ? "ABOUT"
                : section === "experience"
                ? "EXPERIENCE"
                : "EDUCATION"
            }
            top="10%"
            left="5%"
          />
        </motion.div>
      </Box>

      <Resume target="_blank" href="https://resume.io/r/AL0ZXzLR5">
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          RESUME
        </motion.h2>
      </Resume>

      <BottomBar>
        <BottomLink
          onClick={() => {
            setSection("about");
          }}
        >
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {screenSize !== "mobile" ? (
              "ABOUT"
            ) : (
              <INFO width="25" height="25" fill="white" />
            )}
          </motion.h2>
        </BottomLink>
        <BottomLink
          onClick={() => {
            setSection("experience");
          }}
        >
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1.4 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {screenSize !== "mobile" ? (
              "EXPERIENCE"
            ) : (
              <WORK width="25" height="25" fill="white" />
            )}
          </motion.h2>
        </BottomLink>
        <BottomLink
          onClick={() => {
            setSection("education");
          }}
        >
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1.6 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {screenSize !== "mobile" ? (
              "EDUCATION"
            ) : (
              <HAT width="25" height="25" fill="white" />
            )}
          </motion.h2>
        </BottomLink>
        <BottomLink
          onClick={() => {
            setSection("projects");
          }}
        >
          <motion.h2
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1.2 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to="/projects">
              {screenSize !== "mobile" ? (
                "PROJECTS"
              ) : (
                <SKILL width="25" height="25" fill="white" />
              )}
            </NavLink>
          </motion.h2>
        </BottomLink>
      </BottomBar>
    </ThemeProvider>
  );
};

export default AboutPage;
