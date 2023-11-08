import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from '.';

const loading = keyframes`
  from {
    left: -200px;

  }
  to {
    left: 100%;
    
  }
`;

export const StyledSkeleton = styled.div<SkeletonProps>`
  /* background-color: #fff; */

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';

    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    opacity: 0.5;
    background: linear-gradient(to right, #fff 0%, #e2e2e2 50%, #fff 100%) transparent 50%;
    animation: ${loading} 1s ease-in-out infinite;
  }
`;
