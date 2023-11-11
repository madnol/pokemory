import React, { HTMLProps } from 'react';
import { StyledCounter } from './counter.styled';

export interface Props extends HTMLProps<HTMLDivElement> {
  name?: string;
  score?: number;
}

const Counter = (props: Props) => {
  const { score = 0, name, ...restProps } = props;
  return (
    <StyledCounter {...restProps}>
      {name && <h4>{name}</h4>}
      <span>{score}</span>
    </StyledCounter>
  );
};

export default Counter;
