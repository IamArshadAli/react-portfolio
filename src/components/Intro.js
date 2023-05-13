import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/svg/profile-ak.svg";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 75vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media (max-width: 1023px) {
    flex-direction: column;

    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    background: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 0px
        0px / 2px 100% no-repeat,
      linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 100% 0px / 2px
        100% no-repeat;
    border-style: solid none;
    border-image: initial;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
  }

  @media (max-width:599px) {
    width: 70vw;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 96%;
    height: auto;
  }

  @media (max-width: 1023px) {
    width: 100%;
    height: 50%;
    .pic {
      width: 75%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = (props) => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: window.innerWidth > 1023 ? "55vh" : "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text props={props}>
          <h1>Hi,</h1>
          <h3>I'm Arshad Ali.</h3>
          <h6>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.changeDelay(40).pauseFor(1500)
                  .typeString(
                    "I'm a Dynamic IT Professional Driving Business Growth and Success with <span style='color:white;'>Web Development,</span>"
                  ).changeDeleteSpeed(18).changeDelay(60)
                  .pauseFor(1000)
                  .deleteChars(16)
                  .typeString("<span style='color:white;'>Access Development,</span>")
                  .pauseFor(700)
                  .deleteChars(19)
                  .typeString("<span style='color:white;'>Graphics Designing,</span>")
                  .pauseFor(600)
                  .deleteChars(19)
                  .typeString("<span style='color:white;'>Excel, and Freelancing.</span>")
                  .pauseFor(500)
                  .deleteChars(23)
                  .changeDelay('natural')
                  .typeString("<span style='color:white;'>Dynamic IT Solutions!</span>")
                  .start();
              }}
            />
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <NavLink to="/about">
            <img className="pic" src={Me} alt="Profile Pic" />
          </NavLink>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
