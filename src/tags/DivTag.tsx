interface DivTag {
  textNode: string;
  styles: React.CSSProperties;
}

const MakeDiv: React.FC<DivTag> = ({ textNode, styles }) => {
  return <div style={styles}>{textNode}</div>;
};

export default MakeDiv;
