import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const FlippedDeck = styled(animated.div)`
  grid-area: aside;
  overflow-y: scroll;
  & > div {
    margin: 20px auto;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 426px) {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    height: 11em;
    & > div {
      display: inline-block;
      margin-left: 20px;
      align-self: center;
    }
    grid-area: 3/2/5/2;
    flex-direction: row;
  }
`;
