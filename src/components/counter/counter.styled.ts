import styled from 'styled-components';

export const StyledCounter = styled.div`
  grid-area: empty;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 1em;
  span {
    margin-top: 1em;
  }
  /*height: 100%; */
  /* aspect-ratio: 1; */
  border-radius: 20px;
  /* background-color: blueviolet; */
  @media (max-width: 780px) {
    grid-area: header;
    justify-self: right;
    align-self: center;
  }
`;
