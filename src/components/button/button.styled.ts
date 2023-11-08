import styled from 'styled-components';

export const button = styled.button`
  grid-area: header;
  justify-self: center;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 50px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: rgb(22, 9, 240);
  background: linear-gradient(0deg, rgba(22, 9, 240, 1) 0%, rgba(49, 110, 244, 1) 100%);
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
    -webkit-transform: scale(0.1);
    transform: scale(0.1);
  }
  &:hover {
    color: #fff;
    border: none;
    background: transparent;
  }
  &:hover:after {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(2, 126, 251, 1) 0%, rgba(0, 3, 255, 1) 100%);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
