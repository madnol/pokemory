import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const FlippedDeck = styled(animated.div)`
  /* display: flex; */
  flex-direction: column;
  /* justify-content: space-evenly; */
  grid-area: aside;
  align-self: center;

  overflow-y: scroll;
  position: relative;

  /* --mask-height: 32px; */
  /* padding-bottom: var(--mask-height); */
  padding-right: 20px;
  & > div {
    margin: 1em auto;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
  /* --mask-image-content: linear-gradient(
      to bottom,
      transparent,
      black var(--mask-height),
      black calc(100% - var(--mask-height)),
      transparent
    )

    --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;

  --mask-image-scrollbar: linear-gradient(black, black);

  --mask-size-scrollbar: var(--scrollbar-width) 100%;

  mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
  mask-size: var(--mask-size-content), var(--mask-size-scrollbar);


  mask-position:
    0 0,
    100% 0; */
  height: 50vh;
  transition: height 0.3s ease-in-out;
  @media (max-width: 426px) {
    overflow-x: scroll;
    display: flex;
    gap: 2em;
    grid-area: 3/2/5/2;
    flex-direction: row;
  }
`;
