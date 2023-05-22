import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.3)`};
font-size: calc(5rem + 5vw);
z-index:0;

@media (max-width:599px) {
    top:3.3rem;
    left:50%;
    transform: translateX(-50%);
    font-size:2.4rem;
}
`


const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
