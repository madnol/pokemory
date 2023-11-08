import React from 'react';
import * as styled from './icon.styled';

export interface Props {
  name: string;
}

const Icon = (props: Props) => {
  const { name } = props;
  return <styled.Icon src={name} />;
};

export default Icon;
