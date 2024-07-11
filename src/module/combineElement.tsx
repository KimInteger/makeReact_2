import React, { ReactNode } from 'react';

interface CombineDivProps {
  innerHTML: ReactNode;
  styles: React.CSSProperties;
}

const CombineDiv: React.FC<CombineDivProps> = ({ innerHTML, styles }) => {
  return <div style={styles}>{innerHTML}</div>;
};

export default CombineDiv;
