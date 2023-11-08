import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const Board = styled(animated.div)`
  display: grid;
  /* justify-items: center; */
  grid-template-rows: 100px 550px 16ch;
  grid-template-columns: 1fr 2.05fr;
  grid-template-areas:
    'header header'
    'aside main'
    'footer footer';
`;

export const PlayGround = styled(animated.div)`
  display: grid;
  grid-area: main;
  /* grid-area: main; */
  grid-template-rows: repeat(4, 14ch);
  grid-template-columns: repeat(4, 14ch);
  grid-gap: 10px;
`;
