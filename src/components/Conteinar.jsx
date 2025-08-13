import React from 'react'

const Conteinar = ({ children, className }) => {
  return <div className={`max-w-[1320px] m-auto ${className}`}>{children}</div>;
};

export default Conteinar