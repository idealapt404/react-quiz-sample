import React from 'react';
import { ParentProps } from './App';

const Footer: React.FC<ParentProps> = ({children}) => {
  return (
    <footer>{children}</footer>
  )
}

export default Footer;
