import React from 'react';
import elementData from '../static/elementData';
import MakeDiv from './tags/DivTag';
import CombineDiv from './module/combineElement';
import HOneTag from './tags/HOneTag';
import PTag from './tags/PTag';

const App: React.FC = () => {
  return (
    <>
      <CombineDiv
        styles={elementData.root.children.card.style}
        innerHTML={
          <>
            <div>
              <HOneTag
                textNode={
                  elementData.root.children.card.children.cardOne.children.hOne
                    .textNode
                }
              />
              <PTag
                textNode={
                  elementData.root.children.card.children.cardOne.children.pTag
                    .textNode
                }
              />
            </div>
            <div>
              <HOneTag
                textNode={
                  elementData.root.children.card.children.cardTwo.children.hOne
                    .textNode
                }
              />
              <PTag
                textNode={
                  elementData.root.children.card.children.cardTwo.children.pTag
                    .textNode
                }
              />
            </div>
          </>
        }
      />
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
