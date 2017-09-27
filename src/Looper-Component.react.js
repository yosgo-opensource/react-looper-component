const LooperComponent = ({ items, render }) => {
  if (items === null) return null;

  if (items.length) {
    return items.map((item, index) => render(item, index));
  }

  return null;
};

export default LooperComponent;
