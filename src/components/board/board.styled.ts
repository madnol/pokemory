import { animated } from "@react-spring/web";
import styled from "styled-components";

export const PlayGround = styled(animated.div)`
  /* width: 20%; */
  display: grid;
  grid-template-rows: repeat(4, 20ch);
  grid-template-columns: repeat(4, 18ch);
  grid-gap: 20px;
`;

export const FlippedDeck = styled(animated.div)`
  overflow: scroll;
  position: relative;
  padding: 20px;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
  }
  height: 22ch;
  transition: height 0.3s ease-in-out;
  flex-direction: column;
`;
