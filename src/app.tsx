import React from 'react';
import elementData from '../static/elementData';
import MakeDiv from './tags/DivTag';

const App: React.FC = () => {
  return (
    <>
      <div></div>
      <MakeDiv
        styles={elementData.root.children.arrow.style}
        textNode={elementData.root.children.arrow.textNode}
      />
      <MakeDiv
        styles={elementData.root.children.sideBar.style}
        textNode={elementData.root.children.sideBar.textNode}
      />
    </>
  );
};

export default App;
