interface PTagInterface {
  textNode: string;
}

const PTag: React.FC<PTagInterface> = ({ textNode }) => {
  return <p>{textNode}</p>;
};

export default PTag;
