import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { LinkedIN, Instagram, Gmail, Github } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 3rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  @media (max-width: 1023px) {
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 599px) {
    height: 7rem;
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 2.7 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/IAmArshadAli"}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 2.9 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://linkedin.com/in/arshadalikaldane"}
        >
          <LinkedIN
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 3.1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://instagram.com/arshadali.21"}
        >
          <Instagram
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 3.3 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"mailto://arshadalikaldane@gmail.com"}
        >
          <Gmail
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: window.innerWidth < 599 ? "6rem" : "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 2.5,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
