import React, { HTMLProps } from 'react';
import { StyledSkeleton } from './skeleton.styled';

export interface Props extends HTMLProps<HTMLDivElement> {
  width: string | number;
  height: string | number;
}

const Skeleton = (props: Props) => {
  const { width, height, ...restProps } = props ?? {};
  return (
    <StyledSkeleton width={width} height={height} {...restProps} />
  );
};

export default Skeleton;
