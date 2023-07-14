import React from 'react';
import { ParentProps } from './App';

const Main: React.FC<ParentProps> = ({children}) => {
  return (
    <main className="main">
      {children}
    </main>
  )
}

export default Main;
