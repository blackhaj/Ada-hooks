import React from 'react';
import Title from './Title';
import SubTitle from './SubTitle';

export default function Shape({ type, shape, isHovered }) {
  let message = isHovered ? 'You are hoving over me! 🎉' : 'Try hovering over me';

  return (
    <div className="container">
      <Title title={`A ${shape} using a ${type}`} />
      <SubTitle description={message} />
    </div>
  );
}
