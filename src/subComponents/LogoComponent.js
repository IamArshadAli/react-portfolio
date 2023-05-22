import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { AALogo } from "../components/AllSvgs";
import { NavLink } from "react-router-dom";

const Logo = styled.h1`
  display: inline-block;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  @media (max-width: 40em) {
    top: 1rem;
    left: 1rem;
  }
`;

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      <motion.div
        initial={{
          y: -200,
          transition: { type: "spring", duration: 1.5, delay: 2.3 },
        }}
        animate={{
          y: 0,
          transition: { type: "spring", duration: 1.5, delay: 2.3 },
        }}
        exit={{
          y: -200,
          transition: { type: "spring", duration: 0.5 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
             >
      <NavLink to="/">
        <AALogo
          width={window.innerWidth > 960 ? 75 : 50}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </NavLink>
      </motion.div>
    </Logo>
  );
};

export default LogoComponent;
