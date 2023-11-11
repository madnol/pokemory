import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const FlippedDeck = styled(animated.div)`
  grid-area: aside;
  position: relative;
  overflow-y: scroll;
  & > div {
    width: 14ch;
    height: auto;
    aspect-ratio: 1;
    margin: 20px auto;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 769px) {
    grid-area: footer;

    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    height: 11em;
    & > div {
      height: 100%;
      aspect-ratio: 1;
      display: inline-block;
      margin-left: 20px;
    }
  }
`;
