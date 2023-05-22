import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
// import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import TransitionEffect from "./TransitionEffect";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
    font-size: 1.5em;
  }

  @media (max-width: 40em) {
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.2em;
    }
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Resume = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1023px) {
    color: ${(props) => props.theme.body};
  }
`;
// const BLOG = styled(NavLink)`
//   color: ${(props) => props.theme.text};
//   position: absolute;
//   top: 50%;
//   right: calc(1rem + 2vw);
//   transform: rotate(90deg) translate(-50%, -50%);
//   text-decoration: none;
//   z-index: 1;
//   @media (max-width: 1023px) {
//     color: ${(props) => props.theme.body};
//     text-shadow: rgb(0, 0, 0) 0px 0px 4px;
//   }
// `;
// const WORK = styled(NavLink)`
//   color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

//   position: absolute;
//   top: 50%;
//   left: calc(1rem + 2vw);
//   transform: translate(-50%, -50%) rotate(-90deg);
//   text-decoration: none;
//   z-index: 1;

//   @media (max-width: 1023px) {
//     text-shadow: rgb(0, 0, 0) 0px 0px 4px;
//   }
// `;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1023px) {
    color: ${(props) => props.theme.text};
  }
`;
const Projects = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
    transition: all 1s ease-in-out;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media (max-width: 599px) {
    top: ${(props) => (props.click ? "90%" : "50%")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media (max-width: 1023px) {
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    right: 0;
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    setTimeout(handleClick, 1300);
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

  // mobile & click = 50
  // mobile & !click = 80
  // tablet & click = 80
  // tablet & !click = 120
  // desktop & click = 120
  // desktop & !click = 200

  const yinYangSize =
    screenSize === "mobile"
      ? click
        ? 50
        : 80
      : screenSize === "tablet"
      ? click
        ? 80
        : 120
      : click
      ? 120
      : 200;

  return (
    <MainContainer>
      <TransitionEffect />
      <DarkDiv click={click} />
      <Container>
        {/* <PowerButton /> */}
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons
          theme={screenSize == "desktop" && click ? "dark" : "light"}
        />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={yinYangSize}
            height={yinYangSize}
            fill="currentColor"
          />
          <span></span>
        </Center>

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
        {/* <BLOG to="/blog">
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
            Blog
          </motion.h2>
        </BLOG>
        <WORK to="/work" click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 2 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 2 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK> */}
        <BottomBar>
          <ABOUT to="/about" click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 2 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 2 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ABOUT
            </motion.h2>
          </ABOUT>
          <Projects to="/projects">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1.2 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1.2 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              PROJECTS
            </motion.h2>
          </Projects>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
