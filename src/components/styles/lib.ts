import styled from "styled-components";
import { animated } from "react-spring";

export const CardWrapper = styled.div`
    display: 'flex';
    
    align-items: center;
    justify-content: center;
    width:20ch;
    height:20ch;
    transition: filter .5s ease-in-out;
    margin:0 auto;
    &:hover {
        filter: drop-shadow(0 0 0.5rem rgba(63, 81, 181,0.5));
        }
    & > div {
        position:absolute;
        border-radius: 20px;
        width:20ch;
        height:20ch;
        background-color: #ecf0f1;
        background-size: cover;
        background-position: center;
        cursor:pointer;
        will-change: transform, opacity;
       
    }
`
export const Front = styled(animated.div)`
display: flex;
justify-content: center;
align-items: center;
`

export const Back = styled(animated.div)`
background-image: url('https://cdn.dribbble.com/users/51395/screenshots/2859472/pokemon_go_01.gif');
   
`

export const Pokemon = styled.img`
width: 80%;
`

export const PlayGround = styled(animated.div)`
    width:80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
   
`