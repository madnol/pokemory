import styled from "styled-components";

export const button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 1em 2em;
  border: 0;
  border-radius: 50px;
  font-weight: 600;
  color: #fff;

  &:hover {
    background-color: #e54d4d;
    box-shadow: 0px 6.7px 3.5px rgba(0, 0, 0, 0.012),
      0px 22.3px 11.8px rgba(0, 0, 0, 0.018), 0px 100px 53px rgba(0, 0, 0, 0.03);
  }
  &:active {
    background-color: #df2020;
  }
`;
