interface HOneTagInterface {
  textNode: string;
}

const HOneTag: React.FC<HOneTagInterface> = ({ textNode }) => {
  return <h1>{textNode}</h1>;
};

export default HOneTag;
