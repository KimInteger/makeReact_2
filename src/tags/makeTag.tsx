interface divTag {
  textNode: string;
  styles: React.CSSProperties;
}

const divTag: React.FC<divTag> = ({ textNode, styles }) => {
  return <div style={styles}>{textNode}</div>;
};
